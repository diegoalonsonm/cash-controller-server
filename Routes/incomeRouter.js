import { Router } from "express";
import { IncomeController } from "../Controllers/incomeController.js";

const incomeRouter = Router()

incomeRouter.get('/:email', IncomeController.getAllFromUser)
incomeRouter.get('/lastFive/:email', IncomeController.getLastFiveFromUser)
incomeRouter.get('/total/:email', IncomeController.getTotalAmountFromUser)
incomeRouter.get('/monthlyIncome/:email', IncomeController.getEveryMonthIncome)

incomeRouter.post('/', IncomeController.addIncome)

export default incomeRouter