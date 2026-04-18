const router = require("express").Router();

const controller = require("./order.controller");
const authMiddleware = require("../../middleware/auth.middleware");
const roleMiddleware = require("../../middleware/role.middleware");
const { generalLimiter } = require("../../middleware/rateLimit.middleware");

router.post(
  "/",
  authMiddleware,
  generalLimiter,
  roleMiddleware("CUSTOMER", "ADMIN"),
  controller.createOrder,
);

router.get("/my", authMiddleware, controller.getMyOrders);

router.get(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  controller.getAllOrders,
);

router.patch(
  "/:id/status",
  authMiddleware,
  generalLimiter,
  roleMiddleware("ADMIN"),
  controller.updateOrderStatus,
);

module.exports = router;
