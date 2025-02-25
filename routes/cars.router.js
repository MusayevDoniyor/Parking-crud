const {
  getCars,
  getCarById,
  postCar,
  updatedCar,
  deleteCar,
} = require("../controllers/cars.controller");

const router = require("express").Router();

router.get("/", getCars);
router.get("/:id", getCarById);
router.post("/", postCar);
router.put("/:id", updatedCar);
router.delete("/:id", deleteCar);

module.exports = router;
