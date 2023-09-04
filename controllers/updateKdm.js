const { Kdm } = require("../models/kdm");
const { HttpError } = require("../helpers");

const updateKdm = async (req, res) => {
  const { id } = req.params;
  const result = await Kdm.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!result) {
    throw HttpError(404, "Not Found");
  }
  const response = await Kdm.find();

  res.status(200);
  res.json({
    code: 200,
    message: "Update kdm ",
    data: response,
  });
};

module.exports = updateKdm;
