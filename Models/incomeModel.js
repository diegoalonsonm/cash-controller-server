import { db } from "./database/db.js";

export class IncomeModel {
    static async getAllFromUser({email}) {
        const incomes = await db.sequelize.query('SELECT * FROM income WHERE userEmail = :email order by date desc', {
            replacements: { email },
            type: db.sequelize.QueryTypes.SELECT
        })
        return incomes
    }

    static async getLastFiveFromUser({email}) {
        const incomes = await db.sequelize.query('SELECT * FROM income WHERE userEmail = :email order by date desc limit 5', {
            replacements: { email },
            type: db.sequelize.QueryTypes.SELECT
        })
        return incomes
    }

    static async getTotalAmountFromUser({email}) {
        const totalAmount =  await db.sequelize.query('SELECT SUM(amount) as totalAmount FROM income WHERE userEmail = :email', {
            replacements: { email },
            type: db.sequelize.QueryTypes.SELECT
        })
        return totalAmount
    }

    static async addIncome({email, amount, description, date, category}) {
        const income = await db.sequelize.query('insert into income (description, categoryId, amount, date, userEmail) VALUES (:description, :category, :amount, :date, :email)', {
            replacements: { description, category, amount, date, email},
            type: db.sequelize.QueryTypes.INSERT
        })
        return income
    }
}