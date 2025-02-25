const express = require("express");
const app = express();
const carsRouter = require("../routes/cars.router");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<a href='/cars'>Go to cars router</a>");
});

app.use("/cars", carsRouter);

module.exports = app;
