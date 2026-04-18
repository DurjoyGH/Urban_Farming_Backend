const router = require("express").Router();

const controller = require("./post.controller");
const authMiddleware = require("../../middleware/auth.middleware");

router.post("/", authMiddleware, controller.createPost);

router.get("/", controller.getPosts);

router.patch("/:id", authMiddleware, controller.updatePost);

router.delete("/:id", authMiddleware, controller.deletePost);

module.exports = router;
