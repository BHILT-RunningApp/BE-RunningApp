aqiCalculate = pollutants => {
  const aqiData = {
    O3: [33, 66, 100, 120, 140, 160, 187, 213, 240],
    NO2: [67, 134, 200, 267, 334, 400, 467, 534, 600],
    SO2: [88, 177, 266, 354, 443, 532, 710, 887, 1064],
    PM25: [11, 23, 35, 41, 47, 53, 58, 64, 70],
    PM10: [16, 33, 50, 58, 66, 75, 83, 91, 100]
  };

  let no2Index = 0;
  let pm10Index = 0;
  let so2Index = 0;
  let o3Index = 0;
  let pm25Index = 0;

  let aqiArr = [];

  pollutants.forEach(station => {
    // console.log("----------------------------------");
    // console.log(station.name);
    // console.log("----------------------------------");
    for (let i = aqiData.O3.length - 1; i >= 0; i--) {
      if (station.am.pollutants.o3 <= aqiData.O3[i]) {
        o3Index = i + 1;
      }
      if (station.am.pollutants.o3 > aqiData.O3[aqiData.O3.length - 1]) {
        o3Index = 10;
      }
    }
    for (let i = aqiData.NO2.length - 1; i >= 0; i--) {
      if (station.am.pollutants.no2 <= aqiData.NO2[i]) {
        no2Index = i + 1;
      }
      if (station.am.pollutants.no2 > aqiData.NO2[aqiData.NO2.length - 1]) {
        no2Index = 10;
      }
    }

    for (let i = aqiData.SO2.length - 1; i >= 0; i--) {
      if (station.am.pollutants.so2 <= aqiData.SO2[i]) {
        so2Index = i + 1;
      }
      if (station.am.pollutants.so2 > aqiData.SO2[aqiData.SO2.length - 1]) {
        so2Index = 10;
      }
    }
    for (let i = aqiData.PM10.length - 1; i >= 0; i--) {
      if (station.am.pollutants.pm10 <= aqiData.PM10[i]) {
        pm10Index = i + 1;
      }
      if (station.am.pollutants.pm10 > aqiData.PM10[aqiData.PM10.length - 1]) {
        pm10Index = 10;
      }
    }
    for (let i = aqiData.PM25.length - 1; i >= 0; i--) {
      if (station.am.pollutants.pm25 <= aqiData.PM25[i]) {
        pm25Index = i + 1;
      }
      if (station.am.pollutants.pm25 > aqiData.PM25[aqiData.PM25.length - 1]) {
        pm25Index = 10;
      }
    }
    aqiArr = [o3Index, no2Index, so2Index, pm10Index, pm25Index];

    station.am.aqi = Math.max.apply(null, aqiArr);

    no2Index = 0;
    pm10Index = 0;
    so2Index = 0;
    o3Index = 0;
    pm25Index = 0;

    for (let i = aqiData.O3.length - 1; i >= 0; i--) {
      if (station.midday.pollutants.o3 <= aqiData.O3[i]) {
        o3Index = i + 1;
      }
      if (station.midday.pollutants.o3 > aqiData.O3[aqiData.O3.length - 1]) {
        o3Index = 10;
      }
    }
    for (let i = aqiData.NO2.length - 1; i >= 0; i--) {
      if (station.midday.pollutants.no2 <= aqiData.NO2[i]) {
        no2Index = i + 1;
      }
      if (station.midday.pollutants.no2 > aqiData.NO2[aqiData.NO2.length - 1]) {
        no2Index = 10;
      }
    }
    for (let i = aqiData.SO2.length - 1; i >= 0; i--) {
      if (station.midday.pollutants.so2 <= aqiData.SO2[i]) {
        so2Index = i + 1;
      }
      if (station.midday.pollutants.so2 > aqiData.SO2[aqiData.SO2.length - 1]) {
        so2Index = 10;
      }
    }
    for (let i = aqiData.PM10.length - 1; i >= 0; i--) {
      if (station.midday.pollutants.pm10 <= aqiData.PM10[i]) {
        pm10Index = i + 1;
      }
      if (
        station.midday.pollutants.pm10 > aqiData.PM10[aqiData.PM10.length - 1]
      ) {
        pm10Index = 10;
      }
    }
    for (let i = aqiData.PM25.length - 1; i >= 0; i--) {
      if (station.midday.pollutants.pm25 <= aqiData.PM25[i]) {
        pm25Index = i + 1;
      }
      if (
        station.midday.pollutants.pm25 > aqiData.PM25[aqiData.PM25.length - 1]
      ) {
        pm25Index = 10;
      }
    }
    aqiArr = [o3Index, no2Index, so2Index, pm10Index, pm25Index];
    station.midday.aqi = Math.max.apply(null, aqiArr);

    no2Index = 0;
    pm10Index = 0;
    so2Index = 0;
    o3Index = 0;
    pm25Index = 0;

    for (let i = aqiData.O3.length - 1; i >= 0; i--) {
      if (station.pm.pollutants.o3 <= aqiData.O3[i]) {
        o3Index = i + 1;
      }
      if (station.pm.pollutants.o3 > aqiData.O3[aqiData.O3.length - 1]) {
        o3Index = 10;
      }
    }
    for (let i = aqiData.NO2.length - 1; i >= 0; i--) {
      if (station.pm.pollutants.no2 <= aqiData.NO2[i]) {
        no2Index = i + 1;
      }
      if (station.pm.pollutants.no2 > aqiData.NO2[aqiData.NO2.length - 1]) {
        no2Index = 10;
      }
    }
    for (let i = aqiData.SO2.length - 1; i >= 0; i--) {
      if (station.pm.pollutants.so2 <= aqiData.SO2[i]) {
        so2Index = i + 1;
      }
      if (station.pm.pollutants.so2 > aqiData.SO2[aqiData.SO2.length - 1]) {
        so2Index = 10;
      }
    }
    for (let i = aqiData.PM10.length - 1; i >= 0; i--) {
      if (station.pm.pollutants.pm10 <= aqiData.PM10[i]) {
        pm10Index = i + 1;
      }
      if (station.pm.pollutants.pm10 > aqiData.PM10[aqiData.PM10.length - 1]) {
        pm10Index = 10;
      }
    }
    for (let i = aqiData.PM25.length - 1; i >= 0; i--) {
      if (station.pm.pollutants.pm25 <= aqiData.PM25[i]) {
        pm25Index = i + 1;
      }
    }
    aqiArr = [o3Index, no2Index, so2Index, pm10Index, pm25Index];

    station.pm.aqi = Math.max.apply(null, aqiArr);

    no2Index = 0;
    pm10Index = 0;
    so2Index = 0;
    o3Index = 0;
    pm25Index = 0;
  });
  return pollutants;
};

seedPollutionPoints = (req, res) => {
  pollutionPointsData.forEach(pollutionPoint => {
    const newPollutionPoint = new PollutionPointsModel(pollutionPoint);
    newPollutionPoint.save();
  });

  res.send("Seeded Pollution Points");
};

module.exports = { aqiCalculate, seedPollutionPoints };
