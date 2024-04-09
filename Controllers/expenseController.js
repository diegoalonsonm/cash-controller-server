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
}