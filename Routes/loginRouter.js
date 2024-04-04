import { Router } from "express";
import { UserController } from "../Controllers/userController.js";

const logInRouter = Router()

logInRouter.post('/', UserController.logIn)

export default logInRouter