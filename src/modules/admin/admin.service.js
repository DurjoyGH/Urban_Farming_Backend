const prisma = require("../../config/prisma");

const validRoles = ["ADMIN", "VENDOR", "CUSTOMER"];

const deleteUser = async (adminId, userId) => {
  if (adminId === userId) {
    const error = new Error("Admin cannot delete himself");
    error.statusCode = 400;
    throw error;
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      vendorProfile: {
        select: { id: true },
      },
    },
  });

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  await prisma.$transaction(async (tx) => {
    await tx.plantTracking.deleteMany({
      where: { userId },
    });

    await tx.communityPost.deleteMany({
      where: { userId },
    });

    await tx.order.deleteMany({
      where: { userId },
    });

    if (user.vendorProfile) {
      const vendorId = user.vendorProfile.id;

      const rentals = await tx.rentalSpace.findMany({
        where: { vendorId },
        select: { id: true },
      });

      const rentalIds = rentals.map((rental) => rental.id);

      if (rentalIds.length > 0) {
        await tx.plantTracking.deleteMany({
          where: {
            rentalId: { in: rentalIds },
          },
        });
      }

      await tx.order.deleteMany({
        where: { vendorId },
      });

      await tx.sustainabilityCert.deleteMany({
        where: { vendorId },
      });

      await tx.produce.deleteMany({
        where: { vendorId },
      });

      await tx.rentalSpace.deleteMany({
        where: { vendorId },
      });

      await tx.vendorProfile.delete({
        where: { id: vendorId },
      });
    }

    await tx.user.delete({
      where: { id: userId },
    });
  });

  return { message: "User deleted successfully" };
};

const changeUserRole = async (adminId, userId, role) => {
  if (!validRoles.includes(role)) {
    throw new Error("Invalid role");
  }

  if (adminId === userId) {
    const error = new Error("Admin cannot change own role");
    error.statusCode = 400;
    throw error;
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  const updated = await prisma.user.update({
    where: { id: userId },
    data: { role },
  });

  return updated;
};

module.exports = {
  deleteUser,
  changeUserRole,
};
