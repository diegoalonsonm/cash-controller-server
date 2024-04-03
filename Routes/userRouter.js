import { Router } from "express";
import { UserController } from "../Controllers/userController.js";

const userRotuer = Router()

userRotuer.get('/', UserController.getAll)
userRotuer.get('/:id', UserController.getOne)
userRotuer.post('/', UserController.newUser)

export default userRotuer