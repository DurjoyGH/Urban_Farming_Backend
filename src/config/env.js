const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
});

const requiredEnvVars = ["DATABASE_URL", "JWT_SECRET", "JWT_EXPIRES"];

requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

module.exports = {
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES: process.env.JWT_EXPIRES,
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 5000,
};
