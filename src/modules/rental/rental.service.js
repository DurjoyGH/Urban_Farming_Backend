const prisma = require("../../config/prisma");

const createRental = async (userId, payload) => {
  const { location, size, price } = payload;

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

  const rental = await prisma.rentalSpace.create({
    data: {
      vendorId: vendor.id,
      location,
      size,
      price,
      availability: true,
    },
  });

  return rental;
};

const getRentals = async (query) => {
  const { location } = query;

  const rentals = await prisma.rentalSpace.findMany({
    where: location
      ? {
          location: {
            contains: location,
            mode: "insensitive",
          },
        }
      : {},
  });

  return rentals;
};

const updateAvailability = async (rentalId, availability) => {
  const rental = await prisma.rentalSpace.update({
    where: { id: rentalId },
    data: { availability },
  });

  return rental;
};

module.exports = {
  createRental,
  getRentals,
  updateAvailability,
};
