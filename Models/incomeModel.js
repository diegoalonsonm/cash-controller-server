import { db } from "./database/db.js";

export class IncomeModel {
    static async getAllFromUser({email}) {
        const incomes = await db.sequelize.query('SELECT * FROM income WHERE userEmail = :email', {
            replacements: { email },
            type: db.sequelize.QueryTypes.SELECT
        })
        return incomes
    }
}