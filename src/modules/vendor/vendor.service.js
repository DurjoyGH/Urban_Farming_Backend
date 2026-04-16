const prisma = require("../../config/prisma");

const createVendorProfile = async (userId, payload) => {
  const { farmName, farmLocation } = payload;

  const existing = await prisma.vendorProfile.findUnique({
    where: { userId },
  });

  if (existing) {
    const error = new Error("Vendor profile already exists");
    error.statusCode = 400;
    throw error;
  }

  const vendor = await prisma.vendorProfile.create({
    data: {
      userId,
      farmName,
      farmLocation,
      certificationStatus: "PENDING",
    },
  });

  await prisma.user.update({
    where: { id: userId },
    data: { role: "VENDOR" },
  });

  return vendor;
};

module.exports = {
  createVendorProfile,
};
