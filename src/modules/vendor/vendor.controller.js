const vendorService = require("./vendor.service");

const createVendor = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const result = await vendorService.createVendorProfile(userId, req.body);

    res.status(201).json({
      success: true,
      message: "Vendor profile created",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createVendor,
};
