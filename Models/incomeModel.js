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

    static async getEveryMonthIncome({email}) {
        let allMonthsIncome = []

        for (let i = 1; i <= 12; i++) {
            const monthIncome = await db.sequelize.query('SELECT SUM(amount) FROM income WHERE userEmail = :email AND MONTH(date) = :month', {
                replacements: { email, month: i }, type: db.sequelize.QueryTypes.SELECT
            }).then(result => {
                return Number(result[0] && result[0]['SUM(amount)'] ? result[0]['SUM(amount)'] : 0)
            }).catch(err => {
                console.log(err.message)
            })
            
            allMonthsIncome.push(monthIncome)
        }    
        
        return allMonthsIncome        
    }
}