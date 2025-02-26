import mongoose, { Schema } from "mongoose";

const TypeSchema = new Schema(
  {
    craftType: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default TypeSchema;
