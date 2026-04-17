const prisma = require("../../config/prisma");

const getMyProfile = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      createdAt: true,
      vendorProfile: true,
    },
  });

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  return user;
};

const updateProfile = async (userId, payload) => {
  const allowedFields = ["name"];

  const data = {};

  allowedFields.forEach((field) => {
    if (payload[field] !== undefined) {
      data[field] = payload[field];
    }
  });

  const updated = await prisma.user.update({
    where: { id: userId },
    data,
  });

  return updated;
};

const getAllUsers = async () => {
  return await prisma.user.findMany({
    orderBy: { id: "desc" },
  });
};

module.exports = {
  getMyProfile,
  updateProfile,
  getAllUsers,
};
