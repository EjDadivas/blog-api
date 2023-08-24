const express = require("express");
const {
  registerUser,
  loginUser,
  changePassword,
  changeEmail,
} = require("../controllers/authController");

const router = express.Router();

// Middleware
const authMiddleware = require("../middlewares/auth");

//User Registration
router.post("/register", registerUser);

// User Login
router.post("/login", loginUser);

router.patch("/change-password", authMiddleware, changePassword);
router.patch("/change-email", authMiddleware, changeEmail);
module.exports = router;
