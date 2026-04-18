const prisma = require("../../config/prisma");

const validStatus = ["PENDING", "PROCESSING", "COMPLETED", "CANCELLED"];

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

  if (product.certificationStatus !== "APPROVED") {
    const error = new Error("Product is not avaiable");
    error.statusCode = 403;
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

const getMyOrders = async (userId, query) => {
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;

  const filter = { userId };

  const orders = await prisma.order.findMany({
    where: filter,
    orderBy: { orderDate: "desc" },
    skip: (page - 1) * limit,
    take: limit,
  });

  const total = await prisma.order.count({ where: filter });

  return {
    data: orders,
    meta: { page, limit, total },
  };
};

const getAllOrders = async (query) => {
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;

  const orders = await prisma.order.findMany({
    orderBy: { orderDate: "desc" },
    skip: (page - 1) * limit,
    take: limit,
  });

  const total = await prisma.order.count();

  return {
    data: orders,
    meta: { page, limit, total },
  };
};

const updateOrderStatus = async (orderId, status) => {
  const order = await prisma.order.findUnique({
    where: { id: orderId },
  });

  if (!order) {
    const error = new Error("Order not found");
    error.statusCode = 404;
    throw error;
  }

  if (!validStatus.includes(status)) {
    const error = new Error("Invalid status");
    error.statusCode = 400;
    throw error;
  }

  const updated = await prisma.order.update({
    where: { id: orderId },
    data: { status },
  });

  return updated;
};

module.exports = {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
};
