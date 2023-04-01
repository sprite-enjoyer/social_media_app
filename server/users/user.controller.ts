import { NextFunction, Request, Response } from "express";
import prismaClient from "../config/prisma";
import bcrypt from "bcrypt";
import jwt, { JwtPayload, VerifyCallback } from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "@prisma/client";
dotenv.config();

export type JWT = { userId: string, loggedIn: boolean, iat: number };
export type UserInfo = { userId: string, guest: boolean, loggedIn: boolean };

export const verifyJWT = async (req: Request, res: Response, next: NextFunction) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) return res.status(500).json({ message: "no jwt secret defined in server" });

  const token = req.cookies.jwt?.toString();
  if (!token) {
    res.locals.userInfo = { id: null, guest: true, loggedIn: false };
    next();
    return;
  }

  const callback: VerifyCallback<JwtPayload | string> = (err, decoded) => {
    if (err) {
      console.error(err.message, " - jwt verification error");
      res.json({ auth: false, message: "not authenticated." });
      res.locals.userInfo = { id: null, guest: true, loggedIn: false };
      next();
    }
    else {
      const jwt: JWT = decoded as JWT;
      res.locals.userInfo = {
        userId: jwt.userId,
        guest: false,
        loggedIn: jwt.loggedIn,
      };
      next();
    }
  }
  jwt.verify(token, secret, callback);
};


export interface GetCurrentUserResponseBody {
  message: string,
  user: null | Omit<User, "password">,
  loggedIn: boolean,
  guest: boolean,
}

export const getCurrentUser = async (req: Request, res: Response<GetCurrentUserResponseBody>) => {
  if (!res.locals.userInfo) res.json(
    {
      message: "no jwt user id found",
      user: null,
      loggedIn: false,
      guest: true,
    }
  );

  const userInfo = res.locals.userInfo as UserInfo;

  let user = await prismaClient.user.findUnique({ where: { id: userInfo.userId } });
  if (!user) {
    res.json(
      {
        message: "no user found",
        user: null,
        loggedIn: false,
        guest: true
      }
    ).status(404);
    return;
  }

  const { password, ...publicUser } = user;
  res.json(
    {
      message: "success!",
      user: publicUser,
      guest: userInfo.guest,
      loggedIn: userInfo.loggedIn,
    }
  );
}

export interface GetUserRequestBody {
  message: string,
  user: null | Omit<User, "password">,
}

export const getUser = async (req: Request, res: Response<GetUserRequestBody>) => {
  const { userName } = req.params;
  const result = await prismaClient.user.findUnique({ where: { username: userName } });
  if (!result) return res.json({ message: "no user", user: null });
  const { password, ...publicUser } = result;
  res.json({ message: "success!", user: publicUser });
};

export interface PostUserRequestBody {
  message: string
}

export const postUser = async (req: Request, res: Response<PostUserRequestBody>) => {
  const { userName, email, password, firstName, lastName } = req.body;

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = {
    username: userName,
    email: email,
    password: passwordHash,
    firstName: firstName,
    lastName: lastName,
    avatarUrl: null,
    bio: null,
    birthDate: null,
    location: null,
    website: null,
    followedByIDs: [],
    followingIDs: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  await prismaClient.user.create({ data: user });
  res.status(200).json({ message: "success!" });
};

export const putUser = async (req: Request, res: Response) => {
  console.log("user put request!")
};

export const deleteUser = async (req: Request, res: Response) => {
  console.log("user delete request!")
};

export interface CheckUserDataAndSendJWTResponseBody {
  message: string,
  user: null | Omit<User, "password">,
}

export const checkUserDataAndSendJWT = async (req: Request, res: Response<CheckUserDataAndSendJWTResponseBody>) => {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) return res.status(500).json({ message: "secret not defined in the server", user: null });

  const { email, password } = req.body;
  let user = await prismaClient.user.findUnique({ where: { email: email } });

  if (user && (await bcrypt.compare(password, user.password))) {

    const token = jwt.sign({ userId: user.id, loggedIn: true }, jwtSecret);
    const date = new Date();
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
    const { password, ...publicUser } = user;

    res.cookie('jwt', token,
      {
        maxAge: 24 * 60 * 60 * 1000,
        secure: true,
        httpOnly: true,
        expires: date,
      }
    ).status(200).json({ message: "success", user: publicUser });
  }
  else return res.status(401).json({ message: "invalid user credentials", user: null });
};

export interface SignOutResponseBody {
  message: string,
}

export const signOut = async (req: Request, res: Response<SignOutResponseBody>) => {

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) return res.status(500).json({ message: "secret not defined in the server", });

  if (!res.locals.userInfo) res.json({ message: "no jwt user id found" });

  const userInfo = res.locals.userInfo as UserInfo;

  const token = jwt.sign({ userId: userInfo.userId, loggedIn: false }, jwtSecret);
  const date = new Date();
  date.setTime(date.getTime() + (24 * 60 * 60 * 1000));

  res.cookie('jwt', token,
    {
      maxAge: 24 * 60 * 60 * 1000,
      secure: true,
      httpOnly: true,
      expires: date,
    }
  ).status(200).json({ message: "success" });
}