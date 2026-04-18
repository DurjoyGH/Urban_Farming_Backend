const router = require("express").Router();

const controller = require("./admin.controller");
const authMiddleware = require("../../middleware/auth.middleware");
const roleMiddleware = require("../../middleware/role.middleware");

router.delete(
  "/users/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  controller.deleteUser,
);

router.patch(
  "/users/:id/role",
  authMiddleware,
  roleMiddleware("ADMIN"),
  controller.changeUserRole,
);

module.exports = router;
