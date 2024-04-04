import { UserModel } from "../Models/userModel.js"

export class UserController {
    static async getAll(req, res) {
        try {
            const users = await UserModel.getAll()
            res.json(users) 
        } catch (err) {
            res.status(500).send('error: ' + err.message)
        }
    }

    static async getOne(req, res) {
        try {
            const id = req.params.id
            const user = await UserModel.getOneById(id)
            res.json(user)
        } catch (err) {
            res.status(500).send('error: ' + err.message)
        }
    }

    static async newUser(req, res) {
        try {
            const user = req.body
            const newUser = await UserModel.createNewUser(user)
            res.json(newUser)
        } catch (err) {
            res.status(500).send('error: ' + err.message)
        }
    }

    static async logIn(req, res) {
        try {
            const user = req.body
            const userLogIn = await UserModel.logInUser(user)
            
            if (err) res.status(500).send('error: ' + err.message)            
            if (userLogIn > 0) {
                if (userLogIn[0].email === user.email && userLogIn[0].password === user.password) {
                    return res.json({Status: 'Success'})
                } else {
                    return res.json({Error: 'Failed'})
                }
            } else {
                return res.json({Error: 'NoEmail'})
            }

        } catch (err) {
            res.status(500).send('error: ' + err.message)
        }
    }
}