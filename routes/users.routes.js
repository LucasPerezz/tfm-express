import { Router } from "express";
import { getUsers, postUser, updateUser, deleteAllUsers, getUserById, deleteUserById } from "../controller/usuarios.controller.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", getUserById);

userRouter.post("/", postUser);

userRouter.put("/:id", updateUser);

userRouter.delete("/:id", deleteUserById);

userRouter.delete("/", deleteAllUsers);

export default userRouter;
