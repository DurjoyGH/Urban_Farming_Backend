const service = require("./rental.service");

const createRental = async (req, res, next) => {
  try {
    const result = await service.createRental(req.user.id, req.body);

    res.status(201).json({
      success: true,
      message: "Rental space created",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getRentals = async (req, res, next) => {
  try {
    const result = await service.getRentals(req.query);

    res.status(200).json({
      success: true,
      message: "Rental spaces fetched",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateAvailability = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { availability } = req.body;

    const result = await service.updateAvailability(parseInt(id), availability);

    res.status(200).json({
      success: true,
      message: "Availability updated",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createRental,
  getRentals,
  updateAvailability,
};
