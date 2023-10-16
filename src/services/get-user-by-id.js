const { getUserByIdModel } = require('../models/users')
const ERROR = require('../utils/error')

const getUserByIdService = async (id) => {
    const user = await getUserByIdModel(id)

    if(!user) throw new ERROR({ statusCode: 404, message: 'Pessoa não encontrada' })

    return user
}

module.exports = { getUserByIdService }