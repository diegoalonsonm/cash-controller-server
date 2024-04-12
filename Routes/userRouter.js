import { Router } from "express";
import { UserController } from "../Controllers/userController.js";

const userRotuer = Router()
 
userRotuer.get('/', UserController.getAll)
userRotuer.get('/:email', UserController.getOne)
userRotuer.post('/', UserController.newUser)
userRotuer.put('/:email', UserController.updateUserInfo)

userRotuer.post('/recovery', UserController.resetPassword) 

userRotuer.get('/balance/:email', UserController.getBalance)
userRotuer.get('/balance/update/:email', UserController.updateBalance)

export default userRotuer