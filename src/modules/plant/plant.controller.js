const service = require("./plant.service");

const createPlant = async (req, res, next) => {
  try {
    const result = await service.createPlant(req.user.id, req.body);

    res.status(201).json({
      success: true,
      message: "Plant added",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updatePlant = async (req, res, next) => {
  try {
    const result = await service.updatePlant(
      req.user.id,
      parseInt(req.params.id),
      req.body,
    );

    res.status(200).json({
      success: true,
      message: "Plant updated",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getMyPlants = async (req, res, next) => {
  try {
    const result = await service.getMyPlants(req.user.id);

    res.status(200).json({
      success: true,
      message: "My plants",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createPlant,
  updatePlant,
  getMyPlants,
};
