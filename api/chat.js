import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/", async (req, res) => {
  const { message } = req.body;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: message,
  });

  res.json({
    reply: response.text,
  });
});

export default app;