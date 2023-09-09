const express = require("express");
const router = express.Router();

const { currentUser } = require("../../controllers/user");
const { auth } = require("../../middlewares");

const { controllerWrapper } = require("../../helpers");

router.get("/current", auth, controllerWrapper(currentUser));

module.exports = router;
