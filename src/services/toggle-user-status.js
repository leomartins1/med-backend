const { toggleUserStatusModel } = require("../models/users")
const ERROR = require("../utils/error")

const togleUserStatusService = async (id) => {

    if (!id) throw new ERROR({ message: 'Id obrigatório', statusCode: 400 })

    const user = await toggleUserStatusModel(id)

    if(!user) throw new ERROR({ statusCode: 404, message: 'Pessoa não encontrada' })

    return user
}

module.exports = {
  togleUserStatusService
}
