import { Router } from "express";
import { IncomeController } from "../Controllers/incomeController.js";

const incomeRouter = Router()

incomeRouter.get('/:email', IncomeController.getAllFromUser)

export default incomeRouter