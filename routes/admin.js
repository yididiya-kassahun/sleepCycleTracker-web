const express = require("express");

const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/admin", adminController.adminDashboard);
router.get("/postQuotes", adminController.postQuotes);

module.exports = router;
