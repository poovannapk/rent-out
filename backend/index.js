import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'

dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connect to db")
}).catch((err) => {
    console.log(err)
})

const app =  express()

app.use(express.json())

app.listen(3000, () => {
    console.log("server is listening to the port 3000")
})

app.use('/backend/user', userRouter)

app.use('/backend/auth', authRouter)