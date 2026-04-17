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

const updateRental = async (userId, rentalId, payload) => {
  const vendor = await prisma.vendorProfile.findUnique({
    where: { userId },
  });

  if (!vendor) {
    const error = new Error("Vendor profile not found");
    error.statusCode = 404;
    throw error;
  }

  const rental = await prisma.rentalSpace.findUnique({
    where: { id: rentalId },
  });

  if (!rental) {
    const error = new Error("Rental not found");
    error.statusCode = 404;
    throw error;
  }

  if (rental.vendorId !== vendor.id) {
    const error = new Error("Not authorized to update this rental");
    error.statusCode = 403;
    throw error;
  }

  const updated = await prisma.rentalSpace.update({
    where: { id: rentalId },
    data: {
      location: payload.location,
      size: payload.size,
      price: payload.price,
      availability: payload.availability,
    },
  });

  return updated;
};

const deleteRental = async (userId, role, rentalId) => {
  const rental = await prisma.rentalSpace.findUnique({
    where: { id: rentalId },
  });

  if (!rental) {
    const error = new Error("Rental not found");
    error.statusCode = 404;
    throw error;
  }

  if (role !== "ADMIN") {
    const vendor = await prisma.vendorProfile.findUnique({
      where: { userId },
    });

    if (!vendor || rental.vendorId !== vendor.id) {
      const error = new Error("Not authorized to delete this rental");
      error.statusCode = 403;
      throw error;
    }
  }

  await prisma.rentalSpace.delete({
    where: { id: rentalId },
  });

  return { message: "Rental deleted successfully" };
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

module.exports = {
  createRental,
  updateRental,
  deleteRental,
  getRentals,
};
