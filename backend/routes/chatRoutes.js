const express = require("express");
const Chat = require("../models/Chat");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Fetch chat history
router.get("/", authMiddleware, async (req, res) => {
  try {
    const chat = await Chat.findOne({ userId: req.user.userId });
    res.json(chat || { messages: [] });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Save chat message
router.post("/", authMiddleware, async (req, res) => {
  const { text } = req.body;

  try {
    let chat = await Chat.findOne({ userId: req.user.userId });
    if (!chat) {
      chat = new Chat({ userId: req.user.userId, messages: [] });
    }

    chat.messages.push({ text, sender: "user" });
    await chat.save();

    res.json(chat);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
