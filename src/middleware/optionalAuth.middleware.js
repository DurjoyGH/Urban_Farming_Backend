const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");

const optionalAuth = (req, res, next) => {
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, JWT_SECRET);

      req.user = {
        id: decoded.id,
        role: decoded.role,
      };
    }

    next();
  } catch (err) {
    next();
  }
};

module.exports = optionalAuth;
