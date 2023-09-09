const express = require("express");
const router = express.Router();

const { loginUser, logoutUser } = require("../../controllers/auth");
const { validateBody, auth } = require("../../middlewares");
const { schemas } = require("../../models/user");
const { controllerWrapper } = require("../../helpers");

router.post(
  "/login",
  validateBody(schemas.loginSchema),
  controllerWrapper(loginUser)
);
router.post("/logout", auth, controllerWrapper(logoutUser));

module.exports = router;
