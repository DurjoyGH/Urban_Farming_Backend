const service = require("./cert.service");

const submitCertification = async (req, res, next) => {
  try {
    const result = await service.submitCertification(req.user.id, req.body);

    res.status(201).json({
      success: true,
      message: "Certification submitted",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const approveCertification = async (req, res, next) => {
  try {
    const result = await service.approveCertification(
      parseInt(req.params.vendorId),
    );

    res.status(200).json({
      success: true,
      message: "Certification approved",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllCertifications = async (req, res, next) => {
  try {
    const result = await service.getAllCertifications();

    res.status(200).json({
      success: true,
      message: "Certifications fetched",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitCertification,
  approveCertification,
  getAllCertifications,
};
