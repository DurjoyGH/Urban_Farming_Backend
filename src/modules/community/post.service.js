const prisma = require("../../config/prisma");

const createPost = async (userId, payload) => {
  const { postContent } = payload;

  if (!postContent) {
    throw new Error("Post content is required");
  }

  const post = await prisma.communityPost.create({
    data: {
      userId,
      postContent,
    },
  });

  return post;
};

const getPosts = async () => {
  return await prisma.communityPost.findMany({
    orderBy: { postDate: "desc" },
    include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
};

const updatePost = async (userId, role, postId, payload) => {
  const post = await prisma.communityPost.findUnique({
    where: { id: postId },
  });

  if (!post) {
    const error = new Error("Post not found");
    error.statusCode = 404;
    throw error;
  }

  if (!payload.postContent) {
    throw new Error("Post content is required");
  }

  if (post.userId !== userId && role !== "ADMIN") {
    const error = new Error("Not authorized to update this post");
    error.statusCode = 403;
    throw error;
  }

  const updated = await prisma.communityPost.update({
    where: { id: postId },
    data: {
      postContent: payload.postContent,
    },
  });

  return updated;
};

const deletePost = async (userId, role, postId) => {
  const post = await prisma.communityPost.findUnique({
    where: { id: postId },
  });

  if (!post) {
    const error = new Error("Post not found");
    error.statusCode = 404;
    throw error;
  }

  if (post.userId !== userId && role !== "ADMIN") {
    const error = new Error("Not authorized to delete this post");
    error.statusCode = 403;
    throw error;
  }

  await prisma.communityPost.delete({
    where: { id: postId },
  });

  return { message: "Post deleted" };
};

module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
};
