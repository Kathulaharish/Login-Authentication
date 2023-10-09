import express from 'express'
import {loginController, registerController} from '../controllers/authController.js'

//router object
const router = express.Router()

//routing
//Register post method
router.post('/register', registerController)

//Login
router.post('/login', loginController)

export default router