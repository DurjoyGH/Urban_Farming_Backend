const service = require("./produce.service");

const createProduct = async (req, res, next) => {
  try {
    const result = await service.createProduct(req.user.id, req.body);

    res.status(201).json({
      success: true,
      message: "Product created",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const result = await service.getProducts(req.query);

    res.status(200).json({
      success: true,
      message: "Products fetched",
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
  getProducts,
};
