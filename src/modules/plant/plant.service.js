const prisma = require("../../config/prisma");

const createPlant = async (userId, payload) => {
  const { rentalId, plantName } = payload;

  if (!rentalId || !plantName) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  return await prisma.plantTracking.create({
    data: {
      userId,
      rentalId,
      plantName,
      growthStage: "Seed",
      health: "Good",
    },
  });
};

const updatePlant = async (userId, plantId, payload) => {
  const plant = await prisma.plantTracking.findUnique({
    where: { id: plantId },
  });

  if (!plant || plant.userId !== userId) {
    throw new Error("Not authorized");
  }

  return await prisma.plantTracking.update({
    where: { id: plantId },
    data: payload,
  });
};

const getMyPlants = async (userId) => {
  return await prisma.plantTracking.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
  });
};

module.exports = {
  createPlant,
  updatePlant,
  getMyPlants,
};
