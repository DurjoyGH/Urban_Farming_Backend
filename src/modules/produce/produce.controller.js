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

const approveProduct = async (req, res, next) => {
  try {
    const result = await service.approveProduct(parseInt(req.params.productId));

    res.status(200).json({
      success: true,
      message: "Product approved",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const user = req.user || null;

    const result = await service.getProducts(req.query, user);

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
  approveProduct,
  getProducts,
};
