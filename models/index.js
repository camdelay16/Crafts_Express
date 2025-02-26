import mongoose from "mongoose";
import CraftSchema from "./craft.js";
import UserSchema from "./user.js";
import TypeSchema from "./type.js";

const Craft = mongoose.model("Craft", CraftSchema);
const User = mongoose.model("User", UserSchema);
const Type = mongoose.model("Type", TypeSchema);

UserSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.hashedPassword;
  },
});

export { Craft, User, Type };
