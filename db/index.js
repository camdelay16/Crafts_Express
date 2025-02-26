import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error(error.message);
  });
const db = mongoose.connection;

export default db;
