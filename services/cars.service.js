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

    if (!car) return "car_not_found";

    return car;
  }

  return cars;
};

module.exports = { getCars };
