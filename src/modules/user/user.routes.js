const router = require("express").Router();

const controller = require("./user.controller");
const authMiddleware = require("../../middleware/auth.middleware");
const roleMiddleware = require("../../middleware/role.middleware");

router.get("/me", authMiddleware, controller.getMyProfile);

router.patch("/me", authMiddleware, controller.updateProfile);

router.get(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  controller.getAllUsers,
);

module.exports = router;
