import express from "express";
import UserController from "../controller/userController.js";

const userRouter = express.Router();

userRouter.get("/test", UserController.userTest);

export default userRouter;
