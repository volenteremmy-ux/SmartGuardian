import Alert from "./models/Alert.js";
import EmergencyContact from "./models/EmergencyContact.js";

export const sendAlert = async (req, res) => {
  try {
    const { message, location } = req.body;

    const alert = await Alert.create({
      user: req.user.id,
      message,
      location
    });

    // Fetch emergency contacts
    const contacts = await EmergencyContact.find({ user: req.user.id });

    res.json({
      message: "Alert recorded & sent (simulation)",
      alert,
      contacts
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
