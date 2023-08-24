const express = require("express");
const { createTag, getTags } = require("../controllers/tagController"); // Update the import path to match your tag controller
const router = express.Router();

// Create tag
router.post("/", createTag);

// Retrieve Tags
router.get("/", getTags);

module.exports = router;
