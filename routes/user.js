const express = require("express");

const userController = require("../controllers/userController");
const isAuth = require("../middleware/isAuth");

const router = express.Router();

router.get("/user", isAuth, userController.userDashboard);

module.exports = router;
