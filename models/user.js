const { Schema } = require("mongoose");

const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    // isAdmin: { type: Boolean, required: true },
    // userImg: { type: String, required: true },
    // userBio: { type: String, required: true },
    userCrafts: [
      {
        craft_id: { type: Schema.Types.ObjectId, ref: "Craft" },
      },
    ],
    userReviews: [
      {
        craft_id: { type: Schema.Types.ObjectId, ref: "Craft" },
        rating: { type: Number, required: false, min: 1, max: 5 },
        review: { type: String, required: false },
      },
    ],
  },
  { timestamps: true }
);

module.exports = User;
