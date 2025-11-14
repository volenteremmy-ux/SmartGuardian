import EmergencyContact from "./models/EmergencyContact.js";

export const addContact = async (req, res) => {
  try {
    const contact = await EmergencyContact.create({
      user: req.user.id,
      name: req.body.name,
      phone: req.body.phone
    });

    res.json({ message: "Contact added", contact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await EmergencyContact.find({ user: req.user.id });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
