const router = require("express").Router();

const controller = require("./order.controller");
const authMiddleware = require("../../middleware/auth.middleware");
const roleMiddleware = require("../../middleware/role.middleware");

router.post(
  "/",
  authMiddleware,
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
  roleMiddleware("ADMIN"),
  controller.updateOrderStatus,
);

module.exports = router;
