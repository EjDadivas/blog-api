const BlogPost = require("../models/blogPost");

// Create a new blog post
const createBlogPost = async (req, res) => {
  //   res.status(200).json({ msg: "Creating a post" });

  try {
    const { title, content, categories, tags } = req.body;
    console.log(categories, tags);

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
const getBlogPosts = (req, res) => {
  res.status(200).json({ msg: "Getting all posts" });
};

// Retrieve a specific blog post by ID
const getBlogPost = (req, res) => {
  res.status(200).json({ msg: "Getting a post" });
};

// Update a blog post
const updateBlogPost = (req, res) => {
  res.status(200).json({ msg: "Updating a post" });
};

// Delete a blog post
const deleteBlogPost = (req, res) => {
  res.status(200).json({ msg: "Deleting a post" });
};

module.exports = {
  createBlogPost,
  getBlogPosts,
  getBlogPost,
  updateBlogPost,
  deleteBlogPost,
};
