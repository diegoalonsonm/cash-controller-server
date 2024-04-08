import { UserModel } from "../Models/userModel.js"
import { validateUser } from "../Models/validations/userValidation.js"

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
            const user = await UserModel.getOneById({id})
            res.json(user)
        } catch (err) {
            res.status(500).send('error: ' + err.message)
        }
    }

    static async newUser(req, res) {
        try {
            const user = validateUser(req.body)

            if (user.error) return res.status(400).json({ error: JSON.parse(user.error.message) })

            const newUser = await UserModel.createNewUser({user})
            res.json(newUser)
        } catch (err) {
            res.status(500).send('error: ' + err.message)
        }
    }

    static async resetPassword(req, res) {
        try {
            const generateRandomPassword = () => {
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
                let password = '';
                for (let i = 0; i < 8; i++) {
                    password += characters.charAt(Math.floor(Math.random() * characters.length));
                }
                return password;
            }

            const email = req.body.email
            const password = generateRandomPassword()

            if (email.error) return res.status(400).json({ error: JSON.parse(email.error.message) })
            
            const user = {password, email}

            const userReset = await UserModel.resetPassword({user})
            res.json(userReset)        
        } catch (err) {
            res.status(500).send('error: ' + err.message)
        }
    }

    static async getBalance(req, res) {
        try {
            const email = req.params.email
            const balance = await UserModel.getBalance({email})
            res.json(balance)
        } catch (err) {
            res.status(500).send('error: ' + err.message)
            console.log(err)
        }
    }
}