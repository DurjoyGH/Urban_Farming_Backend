const service = require("./admin.service");

const deleteUser = async (req, res, next) => {
  try {
    const result = await service.deleteUser(
      req.user.id,
      parseInt(req.params.id),
    );

    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    next(error);
  }
};

const changeUserRole = async (req, res, next) => {
  try {
    const result = await service.changeUserRole(
      req.user.id,
      parseInt(req.params.id),
      req.body.role,
    );

    res.status(200).json({
      success: true,
      message: "User role updated",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  deleteUser,
  changeUserRole,
};
