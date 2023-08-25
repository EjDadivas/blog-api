const express = require("express");
const { getUser, updateUser } = require("../controllers/userController");
const router = express.Router();

// get all users by id
router.get("/:id", getUser);
router.patch("/:id", updateUser);
module.exports = router;
