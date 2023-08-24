const express = require("express");
const authMiddleware = require("../middlewares/auth");

const {
  createBlogPost,
  getBlogPosts,
  getBlogPost,
  updateBlogPost,
  deleteBlogPost,
} = require("../controllers/blogPostController");
const router = express.Router();

// Create a new blog post
router.post("/", authMiddleware, createBlogPost);

// Retrieve all blog post
router.get("/", getBlogPosts);

// Retrieve a specific blog post by ID
router.get("/:id", authMiddleware, getBlogPost);

// Update a blog post
router.put("/:id", authMiddleware, updateBlogPost);
router.patch("/:id", authMiddleware);

// Delete a blog post
router.delete("/:id", authMiddleware, deleteBlogPost);

module.exports = router;
