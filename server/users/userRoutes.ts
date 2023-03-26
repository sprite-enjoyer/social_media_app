import express from 'express';
import {
  postUserHandler,
  getUserHandler,
  putUserHandler,
  deleteUserHandler,
  checkUserHandler,
  verifyJWT,
} from "./user.controller";

export const userRouter = express.Router();

userRouter.get('/get/:email', verifyJWT, getUserHandler);
userRouter.post("/post", postUserHandler);
userRouter.post("/checkUser", checkUserHandler);
userRouter.put("/put/:email", putUserHandler);
userRouter.delete("/delete/:email", deleteUserHandler);