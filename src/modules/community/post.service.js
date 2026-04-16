const prisma = require("../../config/prisma");

const createPost = async (userId, payload) => {
  const { postContent } = payload;

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
  deletePost,
};
