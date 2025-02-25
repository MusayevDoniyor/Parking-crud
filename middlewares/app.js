const express = require("express");
const cors = require("cors");
const app = express();
const carsRouter = require("../routes/cars.router");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("<a href='/cars'>Go to cars router</a>");
});

app.use("/cars", carsRouter);

module.exports = app;
