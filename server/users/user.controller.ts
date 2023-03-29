import { NextFunction, Request, Response } from "express";
import prismaClient from "../config/prisma";
import bcrypt from "bcrypt";
import jwt, { JwtPayload, VerifyCallback } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyJWT = async (req: Request, res: Response, next: NextFunction) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) return res.status(500).json({ message: "no jwt secret defined in server" });

  const token = req.cookies.jwt?.toString();
  if (!token) {
    res.locals.userInfo = { id: null, guest: true };
    next();
    return;
  }

  const callback: VerifyCallback<JwtPayload | string> = (err, decoded) => {
    if (err) {
      console.error(err.message, " - jwt verification error");
      res.json({ auth: false, message: "not authenticated." });
      res.locals.userInfo = { id: null, guest: true };
      next();
    }
    else {
      res.locals.userInfo = { decoded, guest: false };
      next();
    }
  }
  jwt.verify(token, secret, callback);
};

export const getCurrentUser = async (req: Request, res: Response) => {
  const jwtUserId: string = res.locals.userInfo.decoded?.userId ?? null;
  if (!jwtUserId) { res.json({ message: "no jwt user id found", user: null }); return; }

  let user = await prismaClient.user.findUnique({ where: { id: jwtUserId } });
  if (!user) { res.json({ message: "no user found", user: null }).status(404); return; }

  const { password, ...publicUser } = user;
  res.json({ message: "success!", user: publicUser });
}

export const getUserHandler = async (req: Request, res: Response) => {
  const { userName } = req.params;
  const result = await prismaClient.user.findUnique({ where: { username: userName } });
  if (!result) return res.json({ message: "no user", data: null });
  const { password, ...publicUser } = result;
  res.json(publicUser);
};

export const postUserHandler = async (req: Request, res: Response) => {
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

  const prismaUser = await prismaClient.user.create({ data: user });
  res.status(200).json(prismaUser);
};

export const putUserHandler = async (req: Request, res: Response) => {
  console.log("user put request!")
};

export const deleteUserHandler = async (req: Request, res: Response) => {
  console.log("user delete request!")
};

export const checkUserDataAndSendJWT = async (req: Request, res: Response) => {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) return res.status(500).json({ message: "secret not defined in the server", user: null });

  const { email, password } = req.body;
  let user = await prismaClient.user.findUnique({ where: { email: email } });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ userId: user.id }, jwtSecret);
    const date = new Date();
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
    const { password, ...publicUser } = user;

    res.cookie('jwt', token,
      {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        expires: date
      }
    ).status(200).json({ message: "success", user: publicUser });
  }
  else return res.status(401).json({ message: "invalid user credentials", user: null });
};