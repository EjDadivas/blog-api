const BlogPost = require("../models/blogPost");

// Create a new blog post
const createBlogPost = async (req, res) => {
  try {
    const { title, content, categories, tags } = req.body;

    const userId = req.user._id;

    // const blogPost = await BlogPost.create({
    //   title,
    //   content,
    //   author: userId,
    //   categories,
    //   tags,
    // });
    const blogPost = new BlogPost({
      title,
      content,
      author: userId,
      categories,
      tags,
    });
    console.log(userId);
    await blogPost.save();

    res.status(201).json(blogPost);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Retrieve all blog post
const getBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find()
      .populate("author", "username")
      .populate({ path: "categories", select: "name" })
      .populate({ path: "tags", select: "name" });

    console.log(blogPosts);
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Retrieve a specific blog post by ID
const getBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const blogPost = await BlogPost.findById(id)
      .populate("author", "username")
      .populate({ path: "categories", select: "name" })
      .populate({ path: "tags", select: "name" });

    if (!blogPost) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.status(200).json(blogPost);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update a blog post
// if i have a request sending without other fields they become blank and gone
const updateBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, categories, tags } = req.body;

    const userId = req.user._id;

    const blogPost = await BlogPost.findById(id);
    if (!blogPost) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    // I made changes here:

    if (blogPost.author.toString() !== userId.toString()) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    blogPost.title = title;
    blogPost.content = content;
    blogPost.categories = categories;
    blogPost.tags = tags;
    await blogPost.save();

    res.status(200).json(blogPost);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const patchBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const blogPost = await BlogPost.findById(id);
    if (blogPost.author.toString() !== userId.toString()) {
      return res.status(403).json({ error: "Unauthorized" });
    }
    if (!blogPost) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    const updated = await blogPost.updateOne({ ...req.body });

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a blog post
const deleteBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const blogPost = await BlogPost.findById(id);
    if (!blogPost) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    if (blogPost.author.toString() !== userId.toString()) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    const deleted = await blogPost.deleteOne();
    console.log(deleted);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createBlogPost,
  getBlogPosts,
  getBlogPost,
  updateBlogPost,
  patchBlogPost,
  deleteBlogPost,
};
