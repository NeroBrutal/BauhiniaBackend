const express = require("express");

const cors = require("cors");

module.exports = function (app) {
  app.use(cors());
  app.set("trust proxy", 1);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Import and use versioned routes
  app.use("/", require("../routes/v1/index.route"));
};
