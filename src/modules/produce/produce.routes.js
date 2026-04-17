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
  "/:id",
  authMiddleware,
  roleMiddleware("VENDOR", "ADMIN"),
  controller.updateProduct,
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("VENDOR", "ADMIN"),
  controller.deleteProduct,
);

router.patch(
  "/approve/:productId",
  authMiddleware,
  roleMiddleware("ADMIN"),
  controller.approveProduct,
);

router.get("/", optionalAuth, controller.getProducts);

router.get(
  "/my",
  authMiddleware,
  roleMiddleware("VENDOR", "ADMIN"),
  controller.getMyProducts,
);

module.exports = router;
