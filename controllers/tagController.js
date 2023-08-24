const Tag = require("../models/tag");

const createTag = async (req, res) => {
  try {
    const { name } = req.body;
    const tag = await Tag.create({ name });

    res.status(201).json(tag);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createTag, getTags };
