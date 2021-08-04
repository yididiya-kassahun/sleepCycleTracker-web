const express = require("express");

const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/admin", adminController.adminDashboard);
router.get("/quotesPage", adminController.quotesPage);
router.post("/postQuote", adminController.postQuotes);

module.exports = router;
