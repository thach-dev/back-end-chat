import express from "express";
import cors from "cors";
import { generateReply } from "../services/geminiService.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    const reply = await generateReply(message);

    res.json({
      reply,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      error: "Gemini Error",
    });
  }
});

export default app;