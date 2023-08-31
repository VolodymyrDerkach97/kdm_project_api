const { Kdm } = require("../models/kdm");

const addKdm = async (req, res) => {
  const result = await Kdm.create({ ...req.body });

  res.status(201);
  res.json({
    code: 201,
    message: "Success",
    data: result,
  });
};

module.exports = addKdm;
