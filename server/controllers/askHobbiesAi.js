import AskHobbies from "../models/askHobbiesAi.js";
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_AI_KEY });

async function askHobbiesAi(req, res) {
  try {
    const { hobbiesInquiry } = req.body;

    const askHobbiesAiResponse = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite-preview",
      contents: `${hobbiesInquiry} give answer in form of list`,
    });
    console.log(askHobbiesAiResponse.text);

    res.status(200).json({
      success: true,
      message: "found these results",
      data: askHobbiesAiResponse.text,
    });
  } catch (error) {
    res.status(505).json({
      success: false,
      message: `error:${error.message}`,
    });
  }
}
export default askHobbiesAi;
