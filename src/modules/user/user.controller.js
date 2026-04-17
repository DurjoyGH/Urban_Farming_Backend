const service = require("./user.service");

const getMyProfile = async (req, res, next) => {
  try {
    const result = await service.getMyProfile(req.user.id);

    res.status(200).json({
      success: true,
      message: "Profile fetched",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateProfile = async (req, res, next) => {
  try {
    const result = await service.updateProfile(req.user.id, req.body);

    res.status(200).json({
      success: true,
      message: "Profile updated",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const result = await service.getAllUsers();

    res.status(200).json({
      success: true,
      message: "Users fetched",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMyProfile,
  updateProfile,
  getAllUsers,
};
