import { IncomeModel } from "../Models/incomeModel.js";

export class IncomeController {
    static async getAllFromUser(req, res) {
        try {
            const email = req.params.email
            const incomes = await IncomeModel.getAllFromUser({email})
            res.json(incomes)
        } catch (err) {
            res.status(500).send('error: ' + err.message)
        }
    }

    static async getLastFiveFromUser(req, res) {
        try {
            const email = req.params.email
            const incomes = await IncomeModel.getLastFiveFromUser({email})
            res.json(incomes)
        } catch (err) {
            res.status(500).send('error: ' + err.message)
        }
    }

    static async getTotalAmountFromUser(req, res) {
        try {
            const email = req.params.email
            const totalAmount = await IncomeModel.getTotalAmountFromUser({email})
            res.json(totalAmount)
        } catch (err) {
            res.status(500).send('error: ' + err.message)
        }
    }

    static async addIncome(req, res) {
        try {
            const { email, amount, description, category } = req.body
            const date = new Date().toISOString().split('T')[0]
            console.log(date)
            const income = await IncomeModel.addIncome({email, amount, description, date, category})
            res.json(income)
        } catch (err) {
            res.status(500).send('error: ' + err.message)
        }
    }
}