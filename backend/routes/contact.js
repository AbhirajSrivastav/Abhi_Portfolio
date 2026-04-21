const express = require("express");
const router = express.Router();
const { sendContact } = require("../controllers/contactController");

// POST contact form
router.post("/", sendContact);

module.exports = router;
