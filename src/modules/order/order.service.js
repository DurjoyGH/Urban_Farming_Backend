const prisma = require("../../config/prisma");

const createOrder = async (userId, payload) => {
  const { produceId, quantity } = payload;

  const product = await prisma.produce.findUnique({
    where: { id: produceId },
  });

  if (!product) {
    const error = new Error("Product not found");
    error.statusCode = 404;
    throw error;
  }

  if (product.availableQuantity < quantity) {
    const error = new Error("Insufficient quantity");
    error.statusCode = 400;
    throw error;
  }

  const order = await prisma.order.create({
    data: {
      userId,
      produceId,
      vendorId: product.vendorId,
      status: "PENDING",
    },
  });

  await prisma.produce.update({
    where: { id: produceId },
    data: {
      availableQuantity: product.availableQuantity - quantity,
    },
  });

  return order;
};

const getMyOrders = async (userId) => {
  const orders = await prisma.order.findMany({
    where: { userId },
    orderBy: { orderDate: "desc" },
  });

  return orders;
};

const getAllOrders = async () => {
  return await prisma.order.findMany({
    orderBy: { orderDate: "desc" },
  });
};

module.exports = {
  createOrder,
  getMyOrders,
  getAllOrders,
};
