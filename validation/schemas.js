const Joi = require("joi");

exports.schemas = {
  registerSchema: Joi.object({
    name: Joi.string().min(2).max(10).required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).max(10).required(),
    confirmedPassword: Joi.ref("password"),
    dob: Joi.date().greater(new Date("1990-01-01")).required(),
    age: Joi.number().min(18).max(70).required(),
    languages: Joi.array().items(Joi.string()).required(),
    isRegistered: Joi.boolean().required(),
  }),
  loginSchema: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(6).max(10).required(),
  }),
};
