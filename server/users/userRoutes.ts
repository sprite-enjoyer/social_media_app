import express from 'express';
import { postUserHandler, getUserHandler, putUserHandler, deleteUserHandler, checkUserHandler } from "./user.controller";

export const userRouter = express.Router();

userRouter.get('/get/:userId', getUserHandler);
userRouter.post("/post", postUserHandler);
userRouter.post("/checkUser/:userID", checkUserHandler);
userRouter.put("/put/:userID", putUserHandler);
userRouter.delete("/delete/:userID", deleteUserHandler);