
import express from "express"
import userController from "../controllers/userController"

const router = express.Router()

router.get('/users', userController.allUsers)
router.get('/user/:id', userController.getUser)
router.post('/users', userController.createUser)
router.put('/users/:id', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)

export default router