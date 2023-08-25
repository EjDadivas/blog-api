const express = require("express");
const authMiddleware = require("../middlewares/auth");

const {
  createComment,
  getCommentByBlog,
  updateComment,
  deleteComment,
} = require("../controllers/commentController"); // Assuming you have a commentController with the relevant functions
const router = express.Router();

// Create a new comment
router.post("/", authMiddleware, createComment);

// Retrieve all comments
// router.get("/", getComments);

// Retrieve a specific comment by ID
router.get("/", getCommentByBlog);

// Update a comment
router.patch("/:id", authMiddleware, updateComment);
// router.patch("/:id", authMiddleware, patchComment);

// Delete a comment
router.delete("/:id", authMiddleware, deleteComment);

module.exports = router;
