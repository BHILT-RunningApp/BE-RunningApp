require("dotenv").config();
const DB_URI = "mongodb://localhost:27017/project-bhilt";
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const { seedPollutionPoints } = require('./controllers/pollutionPointsController')
const { seedUsers } = require('./controllers/userController')


const apiRouter = require("./routes/apiRouter");


app.use(require("./routes/apiRouter.js"));
app.use(express.json());
app.use("/api", apiRouter);

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

app.listen(port, () => {
  console.log(`App Listening on ${port}`);
});



app.get('/seed-pollution-points', seedPollutionPoints)
app.get('/seed-users', seedUsers)




module.exports = { app };
