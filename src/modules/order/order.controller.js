const service = require("./order.service");

const createOrder = async (req, res, next) => {
  try {
    const result = await service.createOrder(req.user.id, req.body);

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getMyOrders = async (req, res, next) => {
  try {
    const result = await service.getMyOrders(req.user.id);

    res.status(200).json({
      success: true,
      message: "Orders fetched",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllOrders = async (req, res, next) => {
  try {
    const result = await service.getAllOrders();

    res.status(200).json({
      success: true,
      message: "All orders fetched",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateOrderStatus = async (req, res, next) => {
  try {
    const result = await service.updateOrderStatus(
      parseInt(req.params.id),
      req.body.status,
    );

    res.status(200).json({
      success: true,
      message: "Order status updated",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
};
