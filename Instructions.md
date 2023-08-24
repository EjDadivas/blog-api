📁routes 🗄️blogPosts.js
// Create a new blog post
// Retrieve all blog post
// Retrieve a specific blog post by ID
// Update a blog post
// Delete a blog post
set comments and copy to 📁controllers 🗄️blogPostController.js

register routes with middleware

📁controllers 🗄️blogPostController.js

export
📁routes 🗄️blogPosts.js
import
apply

export router

🗄️server.js
const blogpostRoutes = require("./routes/blogPosts");
app.use("/api/blogPosts", blogpostRoutes);

Test Endpoints
🍊 POST localhost:3000/api/blogPosts/
🍊 GET localhost:3000/api/blogPosts/
🍊 GET localhost:3000/api/blogPosts/1
🍊 PUT localhost:3000/api/blogPosts/1
🍊 PATCH localhost:3000/api/blogPosts/1
🍊 DELETE localhost:3000/api/blogPosts/1

📁models 🗄️blogPost.js
