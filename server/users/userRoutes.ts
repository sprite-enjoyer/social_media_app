import express from 'express';
import {
  postUser,
  getUser,
  putUser,
  deleteUser,
  checkUserDataAndSendJWT,
  verifyJWT,
  getCurrentUser,
  signOut,
} from "./user.controller";

export const userRouter = express.Router();

userRouter.get('/:userName', getUser);
userRouter.get("/get/currentUser", verifyJWT, getCurrentUser);
userRouter.get("/get/signOut", verifyJWT, signOut);

userRouter.post("/post", postUser);
userRouter.post("/checkUser", checkUserDataAndSendJWT);

userRouter.put("/put/:email", putUser);

userRouter.delete("/delete/:email", deleteUser);