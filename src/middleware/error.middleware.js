const errorMiddleware = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // Prisma errors handling
  if (err.code) {
    // Unique constraint failed
    if (err.code === "P2002") {
      statusCode = 400;
      message = `Duplicate field value: ${Object.keys(err.meta.target).join(", ")}`;
    }

    // Record not found
    if (err.code === "P2025") {
      statusCode = 404;
      message = "Resource not found";
    }
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Invalid token";
  }

  if (err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Token expired";
  }

  // Validation error (manual or custom)
  if (err.name === "ValidationError") {
    statusCode = 400;
  }

  // Response format
  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === "development" && {
      stack: err.stack,
    }),
  });
};

module.exports = errorMiddleware;
