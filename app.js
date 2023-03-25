// imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// initialize app
const app = express();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// routes

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to Mongo DB");
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
