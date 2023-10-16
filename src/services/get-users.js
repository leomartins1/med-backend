const { getUsersModel } = require("../models/users")

const getUsersService = async () => {
    const users = await getUsersModel()

    return users
}

module.exports = { getUsersService }