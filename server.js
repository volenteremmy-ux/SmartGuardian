// server.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config(); // Load environment variables from .env

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Basic route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌐 Server running on port ${PORT}`);
});
