const express = require("express");

const userController = require("../controllers/userController");
const isAuth = require("../middleware/isAuth");

const router = express.Router();

router.get("/chartData", userController.chartData);
router.get("/user", isAuth, userController.userDashboard);
router.post("/sleepEntry", isAuth, userController.addSleepEntry);

module.exports = router;
