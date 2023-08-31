const { Kdm } = require("../models/kdm");

const listKdm = async (req, res) => {
  const result = await Kdm.find();
  res.status(200);
  res.json({
    code: 200,
    message: "Get boards success",
    data: result,
  });
};

module.exports = listKdm;
