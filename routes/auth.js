const express = require("express");

const authController = require("../controllers/authController");

const router = express.Router();

router.get("/login", authController.loginView);
router.get("/register", authController.registerView);

module.exports = router;
