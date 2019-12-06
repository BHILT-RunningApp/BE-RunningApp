require("dotenv").config();
const DB_URI = "mongodb://localhost:27017/project-bhilt";
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");

const apiRouter = require("./routes/apiRouter");

const {
  aqiCalculate,
  seedPollutionPoints,
  calcLatLong
} = require("./utils/pollutionPointsUtils.js");
const { pollutionPointsData } = require("./db/data/development-data/index.js");

app.use(require("./routes/apiRouter.js"));
app.use(express.json());
app.use("/api", apiRouter);

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

app.listen(port, () => {
  console.log(`App Listening on ${port}`);
});

const updatedPollutionPointsData = aqiCalculate(pollutionPointsData);

const pollutionPointsWithLatLongs = calcLatLong(updatedPollutionPointsData);

// seedPollutionPoints(updatedPollutionPointsData);

module.exports = { app };
