import dbQuery from '../db/query'
import {
    status,
    errorMessage,
    successMessage
} from '../utils/status'

async function getUsers(request, response) {
    const q = 'SELECT * FROM users ORDER BY id ASC'

    try {
        var data = await dbQuery(q)
        successMessage.data = data.rows
        return response.status(status.success).json(successMessage)
    } catch (error) {
        errorMessage.message = error
        return response.status(status.errorServer).send(errorMessage)
    }
}

async function createUser(request, response) {
    const q = 'INSERT INTO users (name, email) VALUES ($1, $2)'

    var name = request.body.name
    var email = request.body.email

    const value = [
        name,
        email
    ]

    try {
        const data = await dbQuery(q, value)
        successMessage.message = "User created"
        return response.status(status.created).send(successMessage)
    } catch (error) {
        errorMessage.message = error
        return response.status(status.errorServer).send(errorMessage)
    }
}

async function updateUser(request, response) {

    if (request.method == 'PUT') {
        console.log('PUT rece')
    }

    const q = 'UPDATE users SET name = $1, email = $2 WHERE id = $3'

    const id = parseInt(request.params.id)

    const {
        name,
        email
    } = request.body

    const params = [
        name,
        email,
        id
    ]

    try {
        const data = await dbQuery(q, params)
        successMessage.message = "User updated"
        return response.status(status.success).send(successMessage)
    } catch (error) {
        errorMessage.message = error
        return response.status(status.errorServer).send(errorMessage)
    }

}

async function deleteUser(request, response) {
    const q = 'DELETE FROM users WHERE id = $1'

    const id = parseInt(request.params.id)

    try {
        const data = await dbQuery(q, id)
        successMessage.message = "User deleted"
        return response.status(status.success).send(successMessage)
    } catch (error) {
        errorMessage.message = error
        return response.status(status.errorServer).send(errorMessage)
    }
}

export {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}