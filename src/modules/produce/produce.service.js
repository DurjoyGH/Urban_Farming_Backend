const prisma = require("../../config/prisma");

const createProduct = async (userId, payload) => {
  const vendor = await prisma.vendorProfile.findUnique({
    where: { userId },
  });

  if (!vendor) {
    const error = new Error("Vendor profile not found");
    error.statusCode = 404;
    throw error;
  }

  if (vendor.certificationStatus !== "APPROVED") {
    const error = new Error("Vendor not approved by admin");
    error.statusCode = 403;
    throw error;
  }

  const product = await prisma.produce.create({
    data: {
      ...payload,
      vendorId: vendor.id,
      certificationStatus: "PENDING",
    },
  });

  return product;
};

const updateProduct = async (userId, productId, payload) => {
  const vendor = await prisma.vendorProfile.findUnique({
    where: { userId },
  });

  if (!vendor) {
    throw new Error("Vendor profile not found");
  }

  const product = await prisma.produce.findUnique({
    where: { id: productId },
  });

  if (!product) {
    const error = new Error("Product not found");
    error.statusCode = 404;
    throw error;
  }

  if (product.vendorId !== vendor.id) {
    const error = new Error("Not authorized to update this product");
    error.statusCode = 403;
    throw error;
  }

  const updated = await prisma.produce.update({
    where: { id: productId },
    data: {
      name: payload.name,
      description: payload.description,
      price: payload.price,
      category: payload.category,
      availableQuantity: payload.availableQuantity,
      certificationStatus: "PENDING",
    },
  });

  return updated;
};

const deleteProduct = async (userId, role, productId) => {
  const product = await prisma.produce.findUnique({
    where: { id: productId },
  });

  if (!product) {
    const error = new Error("Product not found");
    error.statusCode = 404;
    throw error;
  }

  if (role !== "ADMIN") {
    const vendor = await prisma.vendorProfile.findUnique({
      where: { userId },
    });

    if (!vendor || product.vendorId !== vendor.id) {
      const error = new Error("Not authorized to delete this product");
      error.statusCode = 403;
      throw error;
    }
  }

  await prisma.produce.delete({
    where: { id: productId },
  });

  return { message: "Product deleted successfully" };
};

const approveProduct = async (productId) => {
  const product = await prisma.produce.findUnique({
    where: { id: productId },
  });

  if (!product) {
    const error = new Error("Product not found");
    error.statusCode = 404;
    throw error;
  }

  const updated = await prisma.produce.update({
    where: { id: productId },
    data: {
      certificationStatus: "APPROVED",
    },
  });

  return updated;
};

const getProducts = async (query, user) => {
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;

  let filter = {};

  if (!user || user.role !== "ADMIN") {
    filter.certificationStatus = "APPROVED";
  }

  const products = await prisma.produce.findMany({
    where: filter,
    skip: (page - 1) * limit,
    take: limit,
  });

  const total = await prisma.produce.count({ where: filter });

  return {
    data: products,
    meta: { page, limit, total },
  };
};

const getMyProducts = async (userId) => {
  const vendor = await prisma.vendorProfile.findUnique({
    where: { userId },
  });

  if (!vendor) {
    const error = new Error("Vendor profile not found");
    error.statusCode = 404;
    throw error;
  }

  if (vendor.certificationStatus !== "APPROVED") {
    const error = new Error("Vendor not approved by admin");
    error.statusCode = 403;
    throw error;
  }

  const products = await prisma.produce.findMany({
    where: {
      vendorId: vendor.id,
    },
    orderBy: {
      id: "desc",
    },
  });

  return products;
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  approveProduct,
  getProducts,
  getMyProducts,
};
