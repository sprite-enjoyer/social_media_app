import { Request, Response } from "express";
import prismaClient from "../config/prisma";

export const getUserHandler = async (req: Request, res: Response) => {
  console.log('hi')

  const user = {
    username: 'johndoe',
    email: 'johndoe@example.com',
    password: 'password',
    firstName: 'John',
    lastName: 'Doe',
    avatarUrl: null,
    bio: null,
    birthDate: null,
    location: null,
    website: null,
    followedByIDs: [],
    followingIDs: []
  };

  await prismaClient.user.create({ data: user });
  const result = await prismaClient.user.findUnique({ where: { username: "johndoe" } });
  res.json(result);
};

