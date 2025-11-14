import mongoose from "mongoose";

const alertSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String },
  location: {
    lat: Number,
    lng: Number
  },
  status: { type: String, default: "Sent" }
}, { timestamps: true });

export default mongoose.model("Alert", alertSchema);
