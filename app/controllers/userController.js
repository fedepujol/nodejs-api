import {
    status,
    SuccessMessage,
    ErrorMessage
} from '../utils/status'
import UserService from '../services/UserService'

class UserController {
    constructor() {}
    async allUsers(request, response) {
        const successMessage = new SuccessMessage()
        const errorMessage = new ErrorMessage()
        try {
            var data = await UserService.allUsers()
            successMessage.data = data
            return response.status(status.success).json(successMessage)
        } catch (error) {
            errorMessage.message = error
            return response.status(status.errorServer).send(errorMessage)
        }
    }

    async getUser(request, response) {
        const successMessage = new SuccessMessage()
        const errorMessage = new ErrorMessage()
        const id = request.params.id

        try {
            var data = await UserService.oneUser(id)
            if (data) {
                successMessage.data = data
                return response.status(status.success).json(successMessage)
            } else {
                errorMessage.message = error
                return response.status(status.success).send(errorMessage)
            }
        } catch (error) {
            errorMessage.message = error
            return response.status(status.errorServer).send(errorMessage)
        }
    }

    async createUser(request, response) {
        const newUser = request.body
        const successMessage = new SuccessMessage()
        const errorMessage = new ErrorMessage()

        try {
            const data = await UserService.addUser(newUser)
            successMessage.message = "User created"
            return response.status(status.created).send(successMessage)
        } catch (error) {
            errorMessage.message = error
            return response.status(status.errorServer).send(errorMessage)
        }
    }

    async updateUser(request, response) {
        const successMessage = new SuccessMessage()
        const errorMessage = new ErrorMessage()

        const userUpdated = request.body
        const unId = parseInt(request.params.id)

        try {
            const userToUpdate = UserService.oneUser(unId)
            if (userToUpdate) {
                await UserService.updateUser(userUpdated, unId)
            }

            successMessage.message = "User updated"
            return response.status(status.success).send(successMessage)
        } catch (error) {
            errorMessage.message = error
            return response.status(status.errorServer).send(errorMessage)
        }

    }

    async deleteUser(request, response) {
        const successMessage = new SuccessMessage()
        const errorMessage = new ErrorMessage()

        const id = parseInt(request.params.id)
        console.log(id)
        try {
            const userToDelete = await UserService.oneUser(id)
            if (userToDelete) {
                const userDeleted = await UserService.deleteUser(id)
            } else {
                errorMessage.message = 'User not found'
                return response.status(status.notFound).send(errorMessage)
            }

            successMessage.message = 'User deleted successfully!'
            return response.status(status.success).send(successMessage)
        } catch (error) {
            errorMessage.message = error
            return response.status(status.errorServer).send(errorMessage)
        }
    }
}

export default new UserController()