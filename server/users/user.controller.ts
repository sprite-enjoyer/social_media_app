import { NextFunction, Request, Response } from "express";
import prismaClient from "../config/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyJWT = async (req: Request, res: Response, next: NextFunction) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) return res.status(500);

  const token = req.headers.jwt?.toString();
  if (!token) return res.sendStatus(401);

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      console.error(err.message, " - jwt verification error");
      res.json({ auth: false, message: "not authenticated." });
      res.locals.userID = "guest";
      return;
    }
    else {
      res.locals.userInfo = decoded;
      next();
    }
  });
};

export const getPrivateUserHandler = async (req: Request, res: Response) => {
  const { userId } = res.locals.userInfo;
  if (!userId) return res.json({ message: "user not found in res.locals", data: null });
  const user = await prismaClient.user.findUniqueOrThrow({ where: { id: userId } });
  res.json({ auth: true, data: user });
}

export const getUserHandler = async (req: Request, res: Response) => {
  const { email } = req.params;
  const result = await prismaClient.user.findUnique({ where: { email: email } });
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

export const checkUserHandler = async (req: Request, res: Response) => {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) return res.status(500).json({ message: "secret not defined in the server" });

  const { email, password } = req.body;
  const user = await prismaClient.user.findUniqueOrThrow({ where: { email: email } });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ userId: user.id }, jwtSecret);
    const date = new Date();
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000));

    res.cookie('jwt', token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
      expires: date
    }).status(200).json({ message: "success" });
  }
  else return res.status(401).json({ message: "invalid user credentials" });
};