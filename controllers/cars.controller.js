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

    if (!car) return res.status(404).json({ message: "Car not found" });

    res.status(200).json({ car });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const postCar = (req, res) => {
  try {
    const { number, owner, model } = req.body;

    if (!number || !owner || !model)
      return res.status(400).json({ message: "All fields required" });

    const car = carsService.postCar({ number, owner, model });

    res.status(201).json({ message: "Car created successfully", car });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updatedCar = (req, res) => {
  try {
    const car = carsService.putCar(req.params.id, req.body);

    if (!car) return res.status(404).json({ message: "Car not found" });

    res.status(200).json({ message: "Car updated successfully", car });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteCar = (req, res) => {
  try {
    const car = carsService.removeCar(req.params.id);

    if (!car) return res.status(404).json({ message: "Car not found" });

    res.status(200).json({ message: "Car deleted successfully", car });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getCars, getCarById, postCar, updatedCar, deleteCar };
