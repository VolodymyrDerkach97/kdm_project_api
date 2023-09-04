const { HttpError } = require("../helpers");
const { Kdm } = require("../models/kdm");

const removeKdm = async (req, res) => {
  const { id } = req.params;

  const result = await Kdm.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  const response = await Kdm.find();
  res.status(200);
  res.json({
    code: 200,
    message: "Kdm deleted",
    data: response,
  });
};

module.exports = removeKdm;
