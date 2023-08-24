const Category = require("../models/category");

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await Category.create({ name });

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createCategory, getCategories };
