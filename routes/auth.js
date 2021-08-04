const express = require("express");

const authController = require("../controllers/authController");

const router = express.Router();

router.get("/login", authController.loginView);
router.get("/register", authController.registerView);
router.post("/register.user", authController.postRegister);
router.post("/post.login", authController.postLogin);
module.exports = router;
