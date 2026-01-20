import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

async function listModels() {
    const apiKey = process.env.GEMINI_API_KEY?.trim().replace(/^["']|["']$/g, '');
    if (!apiKey) {
        console.error('No API key found');
        return;
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    try {
        // Note: listModels is on the genAI instance in some versions, or requires a direct fetch
        // Actually, in the official SDK, it's often not directly exposed like this.
        // Let's try a different approach: check if we can generate content with a very basic model.
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("test");
        console.log("Success with gemini-1.5-flash");
    } catch (e) {
        console.error("Failed with gemini-1.5-flash:", e.message);

        try {
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const result = await model.generateContent("test");
            console.log("Success with gemini-pro");
        } catch (e2) {
            console.error("Failed with gemini-pro:", e2.message);
        }
    }
}

listModels();
