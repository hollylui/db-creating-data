const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");

const app = express();

const {
  PORT: port,
  MONGODB_USERNAME: username,
  MONGODB_PASSWORD: password,
  MONGODB_DATABASE: database,
} = process.env;

//! Task 4 -----------------------------------------------------
const mongoDbUrl = `mongodb+srv://${username}:${password}@cluster0.va9ol.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose
  .connect(mongoDbUrl)
  .then(() => console.log("Database connection is successed."))
  .catch((err) => console.log(`Database connection failed: ${err}`));

//! Task 5 -----------------------------------------------------
app.use(express.json());

app.use("/users", usersRouter);

app.listen(port, console.log("Server is listening."));
