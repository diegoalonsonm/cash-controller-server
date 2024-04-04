import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import userRouter from './Routes/userRouter.js';
import logInRouter from './Routes/loginRouter.js';

const PORT = 3930 

const app = express()
app.use(express.json())
app.use(cors())
app.disable('x-powered-by')
app.use(cookieParser())

app.use('/users', userRouter)

app.use('/login', logInRouter)

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})