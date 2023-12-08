const Joi = require("joi");

exports.runValidation = (schema) => {
  return (req, res, next) => {
    //step 2: validate data using schema
    const { error } = schema.validate(req.body, {
      abortEarly: false,
      errors: {
        wrap: {
          label: "",
        },
      },
    });

    if (error) {
      const errorList = error.details.map((err) => err.message);
      res.status(401).json({
        message: "Invalid Input",
        error: errorList,
      });
    }
    next();
  };
};
