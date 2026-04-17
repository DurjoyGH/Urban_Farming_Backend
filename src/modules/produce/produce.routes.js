const router = require("express").Router();

const controller = require("./produce.controller");
const authMiddleware = require("../../middleware/auth.middleware");
const roleMiddleware = require("../../middleware/role.middleware");
const optionalAuth = require("../../middleware/optionalAuth.middleware");


router.post(
  "/",
  authMiddleware,
  roleMiddleware("VENDOR", "ADMIN"),
  controller.createProduct,
);

router.patch(
  "/approve/:productId",
  authMiddleware,
  roleMiddleware("ADMIN"),
  controller.approveProduct,
);

router.get("/", optionalAuth, controller.getProducts);

module.exports = router;
