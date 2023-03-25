import { NextFunction, Request, Response } from "express";
import prismaClient from "../config/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const getUserHandler = async (req: Request, res: Response) => {
  const { userID } = req.params;
  console.log(userID);
  const result = await prismaClient.user.findUnique({ where: { username: "johndoe" } });
  res.json(result);
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
  res.status(200);
  res.json(prismaUser);
};

export const putUserHandler = async (req: Request, res: Response) => {
  console.log("user put request!")
};

export const deleteUserHandler = async (req: Request, res: Response) => {
  console.log("user delete request!")
};

export const checkUserHandler = async (req: Request, res: Response) => {
  console.log(req.body, "body!")
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) return res.status(500).send("secret not defined in the server");

  const { email, password } = req.body;
  const user = await prismaClient.user.findUnique({ where: { email: email } });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ userId: user.id }, jwtSecret);
    console.log(token, "token!")
    res.cookie('jwt', token, {
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: 'none',
    });
    return res.statusCode = 200;
  }
  else return res.statusCode = 401;

};

export const checkUserTokenHandler = async (req: Request, res: Response, next: NextFunction) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) return res.status(500);

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, secret, (err, user) => {
    if (err) {
      console.log(err.message);
      return res.sendStatus(403);
    }
    else {
      res.locals.userID = jwt.decode(token);
      next();
    }
  });

};

