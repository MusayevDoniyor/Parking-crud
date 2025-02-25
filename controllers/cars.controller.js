const carsService = require("../services/cars.service");

const getCars = (req, res) => {
  try {
    const cars = carsService.getCars();

    if (cars === "cars_not_found")
      return res.status(400).json({ message: "No cars in system" });

    res.status(200).json({ count: cars.length, cars });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getCarById = (req, res) => {
  try {
    const car = carsService.getCars(req.params.id);

    if (car === "cars_not_found")
      return res.status(400).json({ message: "No cars in system" });

    if (car === "car_not_found")
      return res.status(404).json({ message: "Car not found" });

    res.status(200).json({ car });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getCars, getCarById };
