const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const kdmSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for kdm"],
    },
    timeStart: {
      type: String,
      required: [true, "Set titeStart for kdm"],
    },
    timeEnd: {
      type: String,
      required: [true, "Set timeEnd for kdm"],
    },
    hall: {
      type: String,
      required: [true, "Set hall for kdm"],
    },
  },
  { versionKey: false, timestamps: true }
);

kdmSchema.post("save", handleMongooseError);

const Kdm = model("kdm_list", kdmSchema);

const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  timeStart: Joi.string().required(),
  timeEnd: Joi.string().required(),
  hall: Joi.string().required(),
});
const updateSchema = Joi.object({
  name: Joi.string(),
  timeStart: Joi.string(),
  timeEnd: Joi.string(),
  hall: Joi.string(),
});

const schemas = {
  addSchema,
  updateSchema,
};

module.exports = {
  Kdm,
  schemas,
};
