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

    static async getEveryMonthExpense({email}) {
        let allMonthsExpense = []

        for (let i = 1; i <= 12; i++) {
            const monthExpense = await db.sequelize.query('SELECT SUM(amount) FROM expense WHERE userEmail = :email AND MONTH(date) = :month', {
                replacements: { email, month: i }, type: db.sequelize.QueryTypes.SELECT
            }).then(result => {
                return Number(result[0] && result[0]['SUM(amount)'] ? result[0]['SUM(amount)'] : 0)
            }).catch(err => {
                console.log(err.message)
            })
            
            allMonthsExpense.push(monthExpense)
        }    
        
        return allMonthsExpense        
    }
}