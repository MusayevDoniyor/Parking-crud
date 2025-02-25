const fs = require("fs");
const path = require("path");
const { v4: uuid4 } = require("uuid");

const carsFilePath = path.join(__dirname, "../data", "cars.json");
console.log(carsFilePath);

const readCars = () => {
  const cars = fs.readFileSync(carsFilePath, "utf8");
  return JSON.parse(cars);
};

const writeCars = (products) => {
  return fs.writeFileSync(
    carsFilePath,
    JSON.stringify(products, null, 2),
    "utf8"
  );
};

const getCars = (id) => {
  const cars = readCars();

  if (cars.length < 1) return "cars_not_found";

  if (id) {
    const car = cars.find((c) => c.id === id);

    if (!car) return null;

    return car;
  }

  return cars;
};

const postCar = (car) => {
  const date = new Date();
  const cars = readCars();
  car.id = uuid4();
  car.parkedAt = date.toISOString();

  cars.push(car);

  writeCars(cars);

  return car;
};

const putCar = (id, updatedCar) => {
  const cars = readCars();
  const index = cars.findIndex((c) => c.id === id);

  if (index === -1) return null;

  if (updatedCar.number) cars[index].number = updatedCar.number;
  if (updatedCar.owner) cars[index].owner = updatedCar.owner;
  if (updatedCar.model) cars[index].model = updatedCar.model;

  writeCars(cars);
  return cars[index];
};

const removeCar = (id) => {
  let cars = readCars();
  const index = cars.findIndex((c) => c.id === id);

  if (index === -1) return null;

  cars = cars.filter((car) => car.id !== id);
  writeCars(cars);
  return cars[index];
};

module.exports = { getCars, postCar, putCar, removeCar };
