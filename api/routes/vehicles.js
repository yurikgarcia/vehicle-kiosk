const express = require("express");
const router = express.Router();

const { getAllVehicles, addVehicle } = require("../controllers/vehicles");
const { login, register } = require("../controllers/login");



router.route('/').get(getAllVehicles).post(addVehicle);
router.route('/users/register').post(register)
router.route('/users/login').post(login);
module.exports = router;