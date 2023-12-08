const { userRegister, userLogin } = require("../controllers/user.controller");
const { runValidation } = require("../validation");
const { schemas } = require("../validation/schemas");

const userRouter = require("express").Router();

userRouter.post(
  "/register",
  runValidation(schemas.registerSchema),
  userRegister
);

userRouter.post("/login", runValidation(schemas.loginSchema), userLogin);

module.exports = userRouter;
