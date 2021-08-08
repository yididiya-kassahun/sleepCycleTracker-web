const express = require("express");

const adminController = require("../controllers/adminController");
const isAuth = require("../middleware/isAuth");

const router = express.Router();

router.get("/admin", isAuth, adminController.adminDashboard);
router.get("/quotesPage", isAuth, adminController.quotesPage);
router.post("/postQuote", isAuth, adminController.postQuotes);
router.post("/deleteUser/:userID", adminController.deleteUser);
//router.get("/adminLogout", adminController.adminLogout);

module.exports = router;
