import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

let generateObservation;

(async () => {
    const module = await import("./ai/generate-observation.js");
    generateObservation = module.default;
})();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/ai", async (req, res) => {
    try {
        if (!generateObservation) {
            return res.status(503).json({ error: "AI service not ready" });
        }
        
        const { userInput } = req.body;
        
        if (!userInput || userInput.trim() === '') {
            return res.status(400).json({ error: "User input is required" });
        }
        
        const observation = await generateObservation(userInput);
        res.json({ observation });
    } catch (error) {
        console.error('Error generating observation:', error);
        res.status(500).json({ error: "Failed to generate observation" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));