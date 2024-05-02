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

// Define whitelist
const whitelist = [
  "http://localhost:3000",
  "https://swip-tory-pied.vercel.app",
  "https://swip-tory-ankitamalik22.vercel.app",
  "http://localhost:5173",
  "http://localhost:4000",
];

// Set CORS options
const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g., API requests)
    if (!origin) return callback(null, true);

    if (whitelist.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
};

// Apply CORS middleware
app.use(cors(corsOptions));

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
