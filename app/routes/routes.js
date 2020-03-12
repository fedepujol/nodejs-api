import {
    createUser,
    updateUser,
    deleteUser,
    getUsers
} from "../controllers/userController"

import express from "express"

const router = express.Router()

router.get('/users', getUsers)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

export default router