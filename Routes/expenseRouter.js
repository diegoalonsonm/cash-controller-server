import { Router } from "express";
import { ExpenseController } from "../Controllers/expenseController.js";

const expenseRouter = Router()

expenseRouter.get('/:email', ExpenseController.getAllFromUser)

export default expenseRouter