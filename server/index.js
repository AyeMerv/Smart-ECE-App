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

app.get("/api/ai", async (req, res) => {
    try {
        if (!generateObservation) {
            return res.status(503).json({ error: "AI service not ready" });
        }
        const observation = await generateObservation();
        res.json({ observation });
    } catch (error) {
        res.status(500).json({ error: "Failed to generate observation" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));