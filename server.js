require("dotenv").config();
const DB_URI = "mongodb://localhost:27017/project-bhilt";
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const {
  aqiCalculate,
  seedPollutionPoints
} = require("./utils/pollutionPointsUtils.js");
const { pollutionPointsData } = require("./db/data/development-data/index.js");

app.use(require("./routes/routes.js"));

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

app.listen(port, () => {
  console.log(`App Listening on ${port}`);
});

//Calculate AQIs and seed DB

const updatedPollutionPointsData = aqiCalculate(pollutionPointsData);

// seedPollutionPoints(updatedPollutionPointsData);
