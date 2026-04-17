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

const updateProduct = async (req, res, next) => {
  try {
    const result = await service.updateProduct(
      req.user.id,
      parseInt(req.params.id),
      req.body,
    );

    res.status(200).json({
      success: true,
      message: "Product updated (pending approval)",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const result = await service.deleteProduct(
      req.user.id,
      req.user.role,
      parseInt(req.params.id)
    );

    res.status(200).json({
      success: true,
      message: result.message,
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

const getMyProducts = async (req, res, next) => {
  try {
    const result = await service.getMyProducts(req.user.id);

    res.status(200).json({
      success: true,
      message: "My products fetched",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  approveProduct,
  getProducts,
  getMyProducts,
};
