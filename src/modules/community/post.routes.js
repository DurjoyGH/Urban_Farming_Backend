const router = require("express").Router();

const controller = require("./post.controller");
const authMiddleware = require("../../middleware/auth.middleware");

router.post("/", authMiddleware, controller.createPost);

router.get("/", controller.getPosts);

router.delete("/:id", authMiddleware, controller.deletePost);

module.exports = router;
