const mongoose = require("mongoose");
const CraftSchema = require("./craft");
const UserSchema = require("./user");
const TypeSchema = require("./type");

const Craft = mongoose.model("Craft", CraftSchema);
const User = mongoose.model("User", UserSchema);
const Type = mongoose.model("Type", TypeSchema);

UserSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.hashedPassword;
  },
});

module.exports = {
  Craft,
  User,
  Type,
};
