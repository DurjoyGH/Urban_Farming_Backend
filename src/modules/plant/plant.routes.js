const router = require("express").Router();

const controller = require("./plant.controller");
const authMiddleware = require("../../middleware/auth.middleware");

router.post("/", authMiddleware, controller.createPlant);

router.patch("/:id", authMiddleware, controller.updatePlant);

router.get("/my", authMiddleware, controller.getMyPlants);

module.exports = router;
