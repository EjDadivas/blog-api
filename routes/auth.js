const express = require("express");

const router = express.Router();

//User Registration
router.post("/register", (req, res) => {
  res.json({ msg: "Resister" });
});

// User Login
router.post("/login", (req, res) => {
  res.json({ msg: "login" });
});

module.exports = router;
