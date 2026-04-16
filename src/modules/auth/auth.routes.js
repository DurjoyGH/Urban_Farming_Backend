const router = require("express").Router();

const authController = require("./auth.controller");
const { authLimiter } = require("../../middleware/rateLimit.middleware");
const validate = require("./auth.validation");

// Register
router.post(
  "/register",
  authLimiter,
  validate.register,
  authController.register,
);

// Login
router.post("/login", 
    authLimiter, 
    validate.login,
    authController.login
);

module.exports = router;
