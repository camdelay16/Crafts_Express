const { Schema } = require("mongoose");

const Type = new Schema(
  {
    craftType: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = Type;
