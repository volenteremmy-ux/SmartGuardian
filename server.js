// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import alertRoutes from "./routes/alertRoutes.js";

dotenv.config(); // Load environment variables from .env

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

app.use(cors());

// Basic route
app.get("/", (req, res) => {
  res.send("API is running...");
});

 //Routes
app.use("/api/users", userRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/alerts", alertRoutes);

app.get("/", (req, res) => {
  res.send("SmartGuardian API is running...");
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
