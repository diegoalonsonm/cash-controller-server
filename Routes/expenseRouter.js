import { Router } from "express";
import { ExpenseController } from "../Controllers/expenseController.js";

const expenseRouter = Router()

expenseRouter.get('/:email', ExpenseController.getAllFromUser)
expenseRouter.get('/lastFive/:email', ExpenseController.getLastFiveFromUser)
expenseRouter.get('/totalAmount/:email', ExpenseController.getTotalAmountFromUser)
expenseRouter.get('/monthlyExpense/:email', ExpenseController.getEveryMonthExpense)
expenseRouter.get('/top5Categories/:email', ExpenseController.getTop5Categories)
expenseRouter.get('/amountByCategory/:email', ExpenseController.getExpenseAmountByCategory)

expenseRouter.post('/', ExpenseController.addExpense)

export default expenseRouter