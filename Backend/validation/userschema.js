import Joi from "joi"
export const loginSchema= Joi.object().keys(
    {
        email:Joi.string().required().email(),
        password:Joi.string().required()

    }
)