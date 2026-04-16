const roleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      if (!req.user || !req.user.role) {
        const error = new Error("Unauthorized access");
        error.statusCode = 401;
        throw error;
      }

      if (!allowedRoles.includes(req.user.role)) {
        const error = new Error("Forbidden: insufficient permissions");
        error.statusCode = 403;
        throw error;
      }

      next();
    } catch (err) {
      next(err);
    }
  };
};

module.exports = roleMiddleware;
