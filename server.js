import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import logger from "morgan";
import bodyParser from "body-parser";
import db from "./db/index.js";
import craftsRouter from "./controllers/crafts.js";
import typesRouter from "./controllers/types.js";
import userRouter from "./controllers/users.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(express.json());

app.use("/crafts", craftsRouter);
app.use("/types", typesRouter);
app.use("/users", userRouter);

app.use("/", (req, res) => {
  res.send("Welcome to Craftopia!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
