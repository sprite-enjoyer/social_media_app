import { NextFunction, Request, Response } from "express";
import prismaClient from "../config/prisma";
import bcrypt from "bcrypt";
import jwt, { JwtPayload, VerifyCallback } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyJWT = async (req: Request, res: Response, next: NextFunction) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) return res.status(500);

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

export const getUserHandler = async (req: Request, res: Response) => {
  const jwtUserId = res.locals.userInfo.decoded?.userId ?? null;
  const { userName } = req.params;

  const result = await prismaClient.user.findUnique({ where: { username: userName } });
  if (!result) return res.json({ message: "no user", data: null });

  const { password, ...publicUser } = result;
  Object.defineProperty(publicUser, "admin", {
    value: jwtUserId === publicUser.id,
    writable: false,
    enumerable: true,
    configurable: false
  });
  console.log(publicUser, "publicUser!!");
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
  if (!jwtSecret) return res.status(500).json({ message: "secret not defined in the server" });

  const { email, password } = req.body;
  const user = await prismaClient.user.findUnique({ where: { email: email } });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ userId: user.id }, jwtSecret);
    const date = new Date();
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000));

    res.cookie('jwt', token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
      expires: date
    }).status(200).json({ message: "success", userName: user.username });
  }
  else return res.status(401).json({ message: "invalid user credentials", userName: null });
};