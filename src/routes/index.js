const router = require("express").Router();

const authRoutes = require("../modules/auth/auth.routes");

router.use("/auth", authRoutes);
router.use("/vendors", require("../modules/vendor/vendor.routes"));
router.use("/products", require("../modules/produce/produce.routes"));

module.exports = router;
