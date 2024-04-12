import { db } from "./database/db.js";

export class ExpenseModel {
    static async getAllFromUser({email}) {
        const expenses = await db.sequelize.query('SELECT * FROM expense WHERE userEmail = :email order by date desc', {
            replacements: { email },
            type: db.sequelize.QueryTypes.SELECT
        })
        return expenses
    }

    static async getLastFiveFromUser({email}) {
        const expenses = await db.sequelize.query('SELECT * FROM expense WHERE userEmail = :email order by date desc limit 5', {
            replacements: { email },
            type: db.sequelize.QueryTypes.SELECT
        })
        return expenses
    }

    static async getTotalAmountFromUser({email}) {
        const totalAmount =  await db.sequelize.query('SELECT SUM(amount) as totalAmount FROM expense WHERE userEmail = :email', {
            replacements: { email },
            type: db.sequelize.QueryTypes.SELECT
        })
        return totalAmount
    }

    static async addExpense({email, amount, description, date, category}) {
        const expense = await db.sequelize.query('insert into expense (description, categoryId, amount, date, userEmail) VALUES (:description, :category, :amount, :date, :email)', {
            replacements: { description, category, amount, date, email},
            type: db.sequelize.QueryTypes.INSERT
        })
        return expense
    }
}