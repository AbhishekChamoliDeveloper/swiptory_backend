// Import required packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");

// Import routes
const userRoutes = require("./routes/userRoutes");
const storyRoutes = require("./routes/storyRoutes");
const connectDB = require("./config/connectDB");

dotenv.config();

const app = express();

// ============================ MIDDLEWARE ============================
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Apply CORS middleware to allow all origins
app.use(cors());

//-------------------- Connect to Database --------------------
connectDB();

// Set up routes
app.use("/api/user", userRoutes);
app.use("/api/story", storyRoutes);

// Error handling middleware
// app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
