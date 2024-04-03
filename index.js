import express from 'express';
import cors from 'cors';
import userRouter from './Routes/userRouter.js';

const PORT = 3930 || process.env.PORT

const app = express()
app.use(express.json())
app.use(cors())
app.disable('x-powered-by')

app.use('/users', userRouter)

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})