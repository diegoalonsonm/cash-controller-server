import { db } from "./database/db.js";

export class ExpenseModel {
    static async getAllFromUser({email}) {
        const expenses = await db.sequelize.query('SELECT * FROM expense WHERE userEmail = :email', {
            replacements: { email },
            type: db.sequelize.QueryTypes.SELECT
        })
        return expenses
    }
}