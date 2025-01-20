const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_CONNECTTION_STRING, {
    useNewUrlParser: true,
    useUnifdTopology: true,
  })
  .then(() => console.log("database connection successful"))
  .catch((err) => console.log(err));

//   request parsers

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine

app.set("view engine", "ejs");
