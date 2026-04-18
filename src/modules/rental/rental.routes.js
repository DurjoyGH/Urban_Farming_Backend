const router = require("express").Router();

const controller = require("./rental.controller");
const authMiddleware = require("../../middleware/auth.middleware");
const roleMiddleware = require("../../middleware/role.middleware");
const { generalLimiter } = require("../../middleware/rateLimit.middleware");

router.post(
  "/",
  authMiddleware,
  roleMiddleware("VENDOR", "ADMIN"),
  controller.createRental,
);

router.patch(
  "/:id",
  authMiddleware,
  roleMiddleware("VENDOR", "ADMIN"),
  controller.updateRental,
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("VENDOR", "ADMIN"),
  controller.deleteRental,
);

router.get("/", controller.getRentals);

router.post(
  "/rent/:id",
  authMiddleware,
  generalLimiter,
  roleMiddleware("CUSTOMER", "ADMIN"),
  controller.rentSpace,
);

module.exports = router;
