const JoiBase = require('joi')
const JoiDate = require('@joi/date')

const Joi = JoiBase.extend(JoiDate)

const { createUserModel } = require('../models/users')
const ERROR = require('../utils/error')
const { validateAge } = require('../utils/calculate-date')

const userSchema = Joi.object({
    nome: Joi.string().required().messages({
        'string.empty': '422-Nome não pode ser empty string'
    }),
    sexo: Joi.string().required().messages({
        'string.empty': '422-Sexo não pode ser empty string'
    }),
    nascimento: Joi.date().custom(validateAge, 'custom validation').format('MM/DD/YYYY').required().messages({
        'age.invalid': '400-Data de nascimento invalida',
    }),
})



const createUserService = async ({ nome, nascimento, sexo }) => {
    const { error } = userSchema.validate({ nome, nascimento, sexo })

    if (error) {
        const [code, message] = error.details[0].message.split('-')
        if (Number(code)) {
            throw new ERROR({ statusCode: Number(code), message })
        }
        throw new ERROR({ statusCode: 422, message: 'Erro inexperado' })
    }

    const user = await createUserModel({ nome, nascimento, sexo })

    return user
}

module.exports = { createUserService }