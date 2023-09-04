const { Kdm } = require("../models/kdm");

const addKdm = async (req, res) => {
  await Kdm.create({ ...req.body });
  const response = await Kdm.find();

  res.status(201);
  res.json({
    code: 201,
    message: "Success",
    data: response,
  });
};

module.exports = addKdm;
