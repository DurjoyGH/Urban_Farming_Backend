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

module.exports = {
  createProduct,
  approveProduct,
  getProducts,
};
