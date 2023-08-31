const express = require("express");

const { controllerWrapper } = require("../../helpers");
const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/kdm");
const kdmController = require("../../controllers");

const router = express.Router();

router.get("/", controllerWrapper(kdmController.listKdm));

router.post(
  "/",
  validateBody(schemas.addSchema),
  controllerWrapper(kdmController.addKdm)
);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.updateSchema),
  controllerWrapper(kdmController.updateKdm)
);

router.delete("/:id", isValidId, controllerWrapper(kdmController.removeKdm));

module.exports = router;
