import { ExpenseModel } from "../Models/expenseModel.js";

export class ExpenseController {
    static async getAllFromUser(req, res) {
        try {
            const email = req.params.email
            const expenses = await ExpenseModel.getAllFromUser({email})
            res.json(expenses)
        } catch (err) {
            res.status(500).send('error: ' + err.message)
        }
    }

    static async getLastFiveFromUser(req, res) {
        try {
            const email = req.params.email
            const expenses = await ExpenseModel.getLastFiveFromUser({email})
            res.json(expenses)
        } catch (err) {
            res.status(500).send('error: ' + err.message)
        }
    }

    static async getTotalAmountFromUser(req, res) {
        try {
            const email = req.params.email
            const totalAmount = await ExpenseModel.getTotalAmountFromUser({email})
            res.json(totalAmount)
        } catch (err) {
            res.status(500).send('error: ' + err.message)
        }
    }

    static async addExpense(req, res) {
        try {
            const { email, amount, description, category } = req.body
            const date = new Date().toISOString().split('T')[0]
            console.log(date)
            const expense = await ExpenseModel.addExpense({email, amount, description, date, category})
            res.json(expense)
        } catch (err) {
            res.status(500).send('error: ' + err.message)
        }
    }
}