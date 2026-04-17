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

router.patch(
  "/:id",
  authMiddleware,
  roleMiddleware("VENDOR", "ADMIN"),
  controller.updateProduct
);

router.get("/", optionalAuth, controller.getProducts);

router.get(
  "/my",
  authMiddleware,
  roleMiddleware("VENDOR", "ADMIN"),
  controller.getMyProducts,
);

module.exports = router;
