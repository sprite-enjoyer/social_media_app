import express from 'express';
import {
  postUserHandler,
  getUserHandler,
  putUserHandler,
  deleteUserHandler,
  checkUserDataAndSendJWT,
  verifyJWT,
  getCurrentUser,
} from "./user.controller";

export const userRouter = express.Router();

userRouter.get('/:userName', getUserHandler);
userRouter.get("/get/currentUser", verifyJWT, getCurrentUser);

userRouter.post("/post", postUserHandler);
userRouter.post("/checkUser", checkUserDataAndSendJWT);

userRouter.put("/put/:email", putUserHandler);

userRouter.delete("/delete/:email", deleteUserHandler);