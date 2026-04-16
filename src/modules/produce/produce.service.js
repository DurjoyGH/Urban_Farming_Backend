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

  const product = await prisma.produce.create({
    data: {
      ...payload,
      vendorId: vendor.id,
      certificationStatus: "PENDING",
    },
  });

  return product;
};

const getProducts = async (query) => {
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;

  const products = await prisma.produce.findMany({
    skip: (page - 1) * limit,
    take: limit,
  });

  const total = await prisma.produce.count();

  return {
    data: products,
    meta: {
      page,
      limit,
      total,
    },
  };
};

module.exports = {
  createProduct,
  getProducts,
};
