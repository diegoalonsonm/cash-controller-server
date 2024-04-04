import { db } from './database/db.js';

export class UserModel {
    static async getAll() {
        const users = await db.sequelize.query('SELECT * FROM users', { type: db.sequelize.QueryTypes.SELECT })
        return users
    }

    static async getOneById(id) {
        const user = await db.sequelize.query('SELECT * FROM users WHERE id = :id', {
            replacements: { id },
            type: db.sequelize.QueryTypes.SELECT
        })
        return user
    }

    static async createNewUser(user) {
        const { name, lastName, email, password } = user

        const newUser = await db.sequelize.query('INSERT INTO users (name, lastName, email, password, availableBudget) VALUES (:name, :lastName, :email, :password, 0.0)', {
            replacements: { name, lastName, email, password },
            type: db.sequelize.QueryTypes.INSERT
        }).catch(err => {
            console.log(err)
        })
        return newUser
    }

    static async logInUser(user) {
        const { email, password } = user

        const userLogIn = await db.sequelize.query('SELECT * FROM users WHERE email = :email AND password = :password', {
            replacements: { email, password },
            type: db.sequelize.QueryTypes.SELECT
        }).catch(err => {
            console.log(err)
        })
        return userLogIn
    }
}