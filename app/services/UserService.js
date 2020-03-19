import User from "../../server/models/users"

class UserService {
    constructor() {}

    async allUsers() {
        try {
            return await User.findAll()
        } catch (error) {
            throw error
        }
    }

    async addUser(newUser) {
        try {
            return await User.create(newUser)
        } catch (error) {
            throw error
        }
    }

    async updateUser(userUpdated, unId) {
        try {
            return await User.update(userUpdated, {
                where: {
                    id: Number(unId)
                }
            })
        } catch (error) {
            throw error
        }
    }

    async deleteUser(unId) {
        try {
            return await User.destroy({
                where: {
                    id: Number(unId)
                }
            })
        } catch (error) {
            throw error
        }
    }

    async oneUser(unId) {
        try {
            return await User.findOne({
                where: {
                    id: Number(unId)
                }
            })
        } catch (error) {
            throw error
        }
    }
}

export default new UserService()