const Comment = require("../models/comment");

// Create a comment
const createComment = async (req, res) => {
  try {
    const { post, content } = req.body;

    const userId = req.user._id;
    console.log(post, content);
    // const comment = await BlogPost.create({
    //   post,
    //   author: userId,
    //   content
    // });
    const comment = new Comment({
      post,
      author: userId,
      content,
    });

    await comment.save();

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Retrieve a specific comment by blogPost ID
const getCommentByBlog = async (req, res) => {
  try {
    const blogPostId = req.query.blogPostId;
    const comments = await Comment.find({ post: blogPostId })
      .populate("author", "username")
      .populate("post", "content");

    if (comments.length === 0) {
      return res
        .status(404)
        .json({ error: "No comments found for the given blog post" });
    }

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update Comment
const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const comment = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({ error: "Comment post not found" });
    }
    if (comment.author.toString() !== userId.toString()) {
      return res.status(403).json({ error: "Unauthorized" });
    }
    // Specifying that the only request body we get is the content since we can't modify the author and the blog post
    const updated = await comment.updateOne({ content: req.body.content });

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a comment
const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const comment = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    if (comment.author.toString() !== userId.toString()) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    const deleted = await Comment.deleteOne({ _id: id });
    console.log(deleted);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createComment,
  getCommentByBlog,
  updateComment,
  deleteComment,
};
