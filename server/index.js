import express from "express";
import cors from "cors";
import { callGemini } from "./ai.js";
const PORT = process.env.PORT || 3001;


const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/generate-trip", async (req, res) => {
  try {
    const { prompt } = req.body;
    const text = await callGemini(prompt);
    res.send(text);
  } catch (e) {
    res.status(500).json({ error: "AI failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});