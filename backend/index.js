import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.routes.js'

dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connect to db")
}).catch((err) => {
    console.log(err)
})

const app =  express()

app.listen(3000, () => {
    console.log("server is listening to the port 3000")
})

app.use('/backend/user', userRouter)