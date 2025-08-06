import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY
});

async function generateObservation() {
    console.log('Making Google Gemini API call...');

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Give me a standard observation that an Australian early childhood educator might write, link these observations to the EYLF Learning Outcomes, and how they were achieved ",
    });
  console.log(response.text);
}

export default generateObservation;