import express from 'express';
import { getUserHandler } from "./user.controller";

export const userRouter = express.Router();

userRouter.get('/:userId', getUserHandler);