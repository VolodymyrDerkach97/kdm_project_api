const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/api/auth");
const userRouter = require("./routes/api/user");
const kdmRouter = require("./routes/api/kdm");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/kdm", kdmRouter);

app.use((req, res) => {
  res.status(404);
  res.json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  console.log("err.stack---<>", err.stack);
  res.status(err.status);
  res.json({
    code: err.status,
    message: err.message,
  });
});

module.exports = app;
