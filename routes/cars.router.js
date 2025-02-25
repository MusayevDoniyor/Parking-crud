const { getCars, getCarById } = require("../controllers/cars.controller");

const router = require("express").Router();

router.get("/", getCars);
router.get("/:id", getCarById);

module.exports = router;
