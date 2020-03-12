import dbQuery from '../db/query'

async function getUsers(request, response) {
    const q = 'SELECT * FROM users ORDER BY id ASC'

    try {
        var data = await dbQuery(q)
        response.status(200).json(data.rows)
    } catch (error) {
        console.log(error)
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
        response.status(201).json(data.rows)
    } catch (error) {
        return response.status(500).send(error)
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
        return response.status(200).json(data.rows)
    } catch (error) {
        return response.status(500).send(error)
    }

}

async function deleteUser(request, response) {
    const q = 'DELETE FROM users WHERE id = $1'

    const id = parseInt(request.params.id)

    try {
        const data = await dbQuery(q, id)
        response.status(200).json(data.rows)
    } catch (error) {
        return response.status(500).send(error)
    }
}

export {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}