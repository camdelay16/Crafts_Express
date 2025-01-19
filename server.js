const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const db = require("./db");
const craftsRouter = require("./controllers/crafts");
const typesRouter = require("./controllers/types");
const userRouter = require("./controllers/users");
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
