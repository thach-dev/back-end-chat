import express from "express";
import cors from "cors";
import { generateReply } from "../services/geminiService.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "API Running",
  });
});

app.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const reply = await generateReply(message);

    res.json({
      reply,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: err.message,
      full: JSON.stringify(err),
    });
  }
});

export default app;