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
}