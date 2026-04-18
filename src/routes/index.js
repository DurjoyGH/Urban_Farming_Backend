const router = require("express").Router();

router.use("/auth", require("../modules/auth/auth.routes"));
router.use("/vendors", require("../modules/vendor/vendor.routes"));
router.use("/products", require("../modules/produce/produce.routes"));
router.use("/orders", require("../modules/order/order.routes"));
router.use("/rentals", require("../modules/rental/rental.routes"));
router.use("/posts", require("../modules/community/post.routes"));
router.use("/certifications", require("../modules/certification/cert.routes"));
router.use("/users", require("../modules/user/user.routes"));
router.use("/plants", require("../modules/plant/plant.routes"));
router.use("/admin", require("../modules/admin/admin.routes"));

module.exports = router;
