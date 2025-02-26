import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    // isAdmin: { type: Boolean, required: true },
    // userImg: { type: String, required: true },
    // userBio: { type: String, required: true },
    userCrafts: [{ type: Schema.Types.ObjectId, ref: "Craft" }],
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

export default UserSchema;
