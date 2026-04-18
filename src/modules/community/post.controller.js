const service = require("./post.service");

const createPost = async (req, res, next) => {
  try {
    const result = await service.createPost(req.user.id, req.body);

    res.status(201).json({
      success: true,
      message: "Post created",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getPosts = async (req, res, next) => {
  try {
    const result = await service.getPosts();

    res.status(200).json({
      success: true,
      message: "Posts fetched",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const result = await service.updatePost(
      req.user.id,
      req.user.role,
      parseInt(req.params.id),
      req.body,
    );

    res.status(200).json({
      success: true,
      message: "Post updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const result = await service.deletePost(
      req.user.id,
      req.user.role,
      parseInt(req.params.id),
    );

    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
};
