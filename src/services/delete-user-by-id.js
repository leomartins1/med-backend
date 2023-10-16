const { deleteUserByIdModel } = require("../models/users")
const ERROR = require("../utils/error")

const deleteUserByIdService = async (id) => {

    if (!id) throw new ERROR({ message: 'Id obrigatório', statusCode: 400 })

    const user = await deleteUserByIdModel(id)

    if(!user) throw new ERROR({ statusCode: 404, message: 'Pessoa não encontrada' })

    return user
}

module.exports = {
  deleteUserByIdService
}
