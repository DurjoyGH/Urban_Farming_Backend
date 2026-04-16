const router = require("express").Router();

const controller = require("./cert.controller");
const authMiddleware = require("../../middleware/auth.middleware");
const roleMiddleware = require("../../middleware/role.middleware");

router.post(
  "/",
  authMiddleware,
  roleMiddleware("VENDOR", "ADMIN"),
  controller.submitCertification,
);

router.patch(
  "/approve/:vendorId",
  authMiddleware,
  roleMiddleware("ADMIN"),
  controller.approveCertification,
);

router.get(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  controller.getAllCertifications,
);

module.exports = router;
