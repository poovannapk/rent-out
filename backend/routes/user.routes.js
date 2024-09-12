import express from 'express'
import { test } from '../controller/user.controller.js'
import { signin } from '../controller/auth.controller.js'

const router = express.Router()

router.get('/signin', test)

export default router