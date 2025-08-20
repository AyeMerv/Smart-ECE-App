import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY
});

async function generateObservation(userInput) {
    console.log('Making Google Gemini API call with user input:', userInput);

    const prompt = `
        Based on this raw observation or notes from an Australian early childhood educator: "${userInput}"
        
        Please generate a professional, well-structured observation that includes:
        1. A clear, objective description of what was observed
        2. Links to relevant EYLF (Early Years Learning Framework) Learning Outcomes
        3. How these learning outcomes were achieved or demonstrated
        4. Professional language appropriate for early childhood documentation
        
        Format the response as a JSON object with the following structure:
        {
            "observation": "The professional observation text",
            "eylf_outcomes": ["List of relevant EYLF outcomes"],
            "achievements": "How the outcomes were achieved or demonstrated"
        }
    `;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
        }
    });
    
    // Extract the actual text content from the response
    const observationData = JSON.parse(response.text);
    return observationData;
}

export default generateObservation;