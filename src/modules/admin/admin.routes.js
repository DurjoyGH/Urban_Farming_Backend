const router = require("express").Router();

const controller = require("./admin.controller");
const authMiddleware = require("../../middleware/auth.middleware");
const roleMiddleware = require("../../middleware/role.middleware");
const { generalLimiter } = require("../../middleware/rateLimit.middleware");

router.delete(
  "/users/:id",
  authMiddleware,
  generalLimiter,
  roleMiddleware("ADMIN"),
  controller.deleteUser,
);

router.patch(
  "/users/:id/role",
  authMiddleware,
  generalLimiter,
  roleMiddleware("ADMIN"),
  controller.changeUserRole,
);

module.exports = router;
