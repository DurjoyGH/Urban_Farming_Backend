const router = require("express").Router();

const controller = require("./vendor.controller");
const authMiddleware = require("../../middleware/auth.middleware");
const roleMiddleware = require("../../middleware/role.middleware");

router.post(
  "/",
  authMiddleware,
  roleMiddleware("CUSTOMER", "ADMIN"),
  controller.createVendor,
);

module.exports = router;
