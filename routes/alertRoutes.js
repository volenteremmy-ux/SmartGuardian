import express from "express";
import { sendAlert } from "../controllers/alertController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, sendAlert);

export default router;
