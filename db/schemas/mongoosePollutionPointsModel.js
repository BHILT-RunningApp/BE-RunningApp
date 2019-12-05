const mongoose = require("mongoose");
const pollutionPointsSchema = new mongoose.Schema({
  name: String,
  id: Number,
  pp_coordinates: {
    lat: mongoose.Decimal128,
    long: mongoose.Decimal128
  },
  am: {
    pollutants: {
      no2: mongoose.Decimal128,
      pm10: mongoose.Decimal128,
      so2: mongoose.Decimal128,
      o3: mongoose.Decimal128,
      pm25: mongoose.Decimal128
    },
    aqi: Number,
    top_corner: {
      lat: mongoose.Decimal128,
      long: mongoose.Decimal128
    },
    bottom_corner: {
      lat: mongoose.Decimal128,
      long: mongoose.Decimal128
    }
  },
  midday: {
    pollutants: {
      no2: mongoose.Decimal128,
      pm10: mongoose.Decimal128,
      so2: mongoose.Decimal128,
      o3: mongoose.Decimal128,
      pm25: mongoose.Decimal128
    },
    aqi: Number,
    top_corner: {
      lat: mongoose.Decimal128,
      long: mongoose.Decimal128
    },
    bottom_corner: {
      lat: mongoose.Decimal128,
      long: mongoose.Decimal128
    }
  },
  pm: {
    pollutants: {
      no2: mongoose.Decimal128,
      pm10: mongoose.Decimal128,
      so2: mongoose.Decimal128,
      o3: mongoose.Decimal128,
      pm25: mongoose.Decimal128
    },
    aqi: Number,
    top_corner: {
      lat: mongoose.Decimal128,
      long: mongoose.Decimal128
    },
    bottom_corner: {
      lat: mongoose.Decimal128,
      long: mongoose.Decimal128
    }
  }
});

const PollutionPointsModel = mongoose.model(
  "PollutionPoint",
  pollutionPointsSchema
);

exports.PollutionPointsModel = PollutionPointsModel;
