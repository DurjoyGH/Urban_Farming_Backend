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

const updateRental = async (req, res, next) => {
  try {
    const result = await service.updateRental(
      req.user.id,
      parseInt(req.params.id),
      req.body,
    );

    res.status(200).json({
      success: true,
      message: "Rental updated",
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

module.exports = {
  createRental,
  updateRental,
  getRentals,
};
