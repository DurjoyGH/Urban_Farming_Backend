const router = require("express").Router();

const controller = require("./produce.controller");
const authMiddleware = require("../../middleware/auth.middleware");
const roleMiddleware = require("../../middleware/role.middleware");

router.post(
  "/",
  authMiddleware,
  roleMiddleware("VENDOR", "ADMIN"),
  controller.createProduct,
);

router.get("/", controller.getProducts);

module.exports = router;
