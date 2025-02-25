const {
  getCars,
  getCarById,
  postCar,
} = require("../controllers/cars.controller");

const router = require("express").Router();

router.get("/", getCars);
router.get("/:id", getCarById);
router.post("/", postCar);
router.put("/:id", getCarById);

module.exports = router;
