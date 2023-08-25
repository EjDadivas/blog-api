require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Create an Express App
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require("./routes/auth");
const blogpostRoutes = require("./routes/blogPosts");
const categoryRoutes = require("./routes/categories");
const tagRoutes = require("./routes/tags");
const commentRoutes = require("./routes/comments");

app.use("/api/auth", authRoutes);
app.use("/api/blogPosts", blogpostRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/tags", tagRoutes);
app.use("/api/comments", commentRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Start the server
app.listen(process.env.PORT, () => console.log("Server is running"));
