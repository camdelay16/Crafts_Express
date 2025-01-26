const { Schema } = require("mongoose");

const Craft = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "user_id" },
    craftName: { type: String, required: true },
    craftType_id: { type: Schema.Types.ObjectId, ref: "Types" },
    tagline: { type: String, required: true },
    difficulty: {
      type: String,
      required: true,
      enum: { values: ["Easy", "Medium", "Hard", "Expert"] },
    },
    premiumMembership: { type: Boolean, required: true },
    craftImg: { type: String, required: true },
    forKids: { type: Boolean, required: true },
    description: { type: String, required: true },
    materials: [
      {
        amount: { type: Number },
        unit: { type: String },
        item: { type: String },
      },
    ],
    directions: [
      {
        step: { type: Number, required: true },
        stepImg: { type: String },
        direction: { type: String, required: true },
      },
    ],
    youtubeLink: { type: String },
    craftReviews: [
      {
        reviewer: { type: String, required: false },
        rating: { type: Number, required: false, min: 1, max: 5 },
        review: { type: String, required: false },
      },
    ],
  },
  { timestamps: true }
);

module.exports = Craft;
