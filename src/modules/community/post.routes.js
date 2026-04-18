const router = require("express").Router();

const controller = require("./post.controller");
const authMiddleware = require("../../middleware/auth.middleware");
const { generalLimiter } = require("../../middleware/rateLimit.middleware");

router.post("/", authMiddleware, generalLimiter, controller.createPost);

router.get("/", controller.getPosts);

router.patch("/:id", authMiddleware, generalLimiter, controller.updatePost);

router.delete("/:id", authMiddleware, generalLimiter, controller.deletePost);

module.exports = router;
