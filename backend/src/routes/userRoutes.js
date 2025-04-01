import { Router } from "express";
import { getUsers } from "../controllers/usersController.js";
const userRouter = Router();

userRouter.get("/", getUsers);

export {userRouter};