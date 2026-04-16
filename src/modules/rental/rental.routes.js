const router = require("express").Router();

const controller = require("./rental.controller");
const authMiddleware = require("../../middleware/auth.middleware");
const roleMiddleware = require("../../middleware/role.middleware");

router.post(
  "/",
  authMiddleware,
  roleMiddleware("VENDOR", "ADMIN"),
  controller.createRental,
);

router.get("/", controller.getRentals);

router.patch(
  "/:id",
  authMiddleware,
  roleMiddleware("VENDOR", "ADMIN"),
  controller.updateAvailability,
);

module.exports = router;
