const { createUserService } = require("../services/create-user")
const { getUserByIdService } = require("../services/get-user-by-id")
const { getUsersService } = require("../services/get-users")
const { togleUserStatusService } = require("../services/toggle-user-status")
const { deleteUserByIdService } = require("../services/delete-user-by-id")

const createUserController = async (req, res, next) => {
    try {
        const { nome, nascimento, sexo } = req.body

        const newUser = await createUserService({ nome, nascimento, sexo })

        return res.status(201).json(newUser)

    } catch (error) {
        console.log(error.message)
        next(error)
    }
}

const getUserByIdController = async (req, res, next) => {
    try {
        const { id } = req.params

        const user = await getUserByIdService(id)
        return res.status(200).json(user)

    } catch (error) {
        console.log(error.message)
        next(error)
    }
}

const getUsersController = async (req, res, next) => {
    try {
        const users = await getUsersService()

        return res.status(200).json(users)
    } catch (error) {
        console.log(error.message)
        next(error)
    }
}

const toggleUserStatusController = async (req, res, next) => {
    try {
        const { id } = req.params

        const user = await togleUserStatusService(id)

        return res.status(200).json(user)
    } catch (error) {
        console.log(error.message)
        next(error)
    }
}

const deleteUserByIdController = async (req, res, next) => {
    try {
        const { id } = req.params

        const user = await deleteUserByIdService(id)

        return res.status(200).json(user)
    } catch (error) {
        console.log(error.message)
        next(error)
    }
}

module.exports = { createUserController, getUserByIdController, getUsersController, toggleUserStatusController, deleteUserByIdController }