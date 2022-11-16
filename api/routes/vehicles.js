const express = require("express");
const router = express.Router();

const { getAllVehicles, addVehicle } = require("../controllers/vehicles");



router.route('/').get(getAllVehicles).post(addVehicle);

module.exports = router;