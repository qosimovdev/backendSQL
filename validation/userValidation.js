const Joi = require("joi")

exports.validateUser = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        customer_id: Joi.number(),
        car_id: Joi.number()
    })
    return schema.validate(user)
}