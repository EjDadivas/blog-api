const express = require("express");
const {
  createCategory,
  getCategories,
} = require("../controllers/categoryController");
const router = express.Router();

// Create category
router.post("/", createCategory);

// Retrieve Categories
router.get("/", getCategories);

module.exports = router;
