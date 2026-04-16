const prisma = require("../../config/prisma");

const submitCertification = async (userId, payload) => {
  const { certifyingAgency, certificationDate } = payload;

  const vendor = await prisma.vendorProfile.findUnique({
    where: { userId },
  });

  if (!vendor) {
    const error = new Error("Vendor profile not found");
    error.statusCode = 404;
    throw error;
  }

  const cert = await prisma.sustainabilityCert.create({
    data: {
      vendorId: vendor.id,
      certifyingAgency,
      certificationDate: new Date(certificationDate),
    },
  });

  return cert;
};

const approveCertification = async (vendorId) => {
  const vendor = await prisma.vendorProfile.findUnique({
    where: { id: vendorId },
  });

  if (!vendor) {
    const error = new Error("Vendor not found");
    error.statusCode = 404;
    throw error;
  }

  const updated = await prisma.vendorProfile.update({
    where: { id: vendorId },
    data: {
      certificationStatus: "APPROVED",
    },
  });

  return updated;
};

const getAllCertifications = async () => {
  return await prisma.sustainabilityCert.findMany({
    include: {
      vendor: {
        select: {
          id: true,
          farmName: true,
        },
      },
    },
  });
};

module.exports = {
  submitCertification,
  approveCertification,
  getAllCertifications,
};
