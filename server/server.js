// server/server.js
import './envConfig.js'; // This must be the very first import

import express from 'express';
import cors from 'cors';
import { generateSunsetDescription } from './descriptionGenerator.js';

// Debug logs to verify env variables are loaded
console.log('Current working directory:', process.cwd());
console.log('TEST_VAR:', process.env.TEST_VAR);
console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);

const app = express();

const corsOptions = {
  origin: 'https://sunset-hues.onrender.com'
};

app.use(cors(corsOptions));
app.use(express.json());

app.post('/api/generate-description', async (req, res) => {
  try {
    const weatherData = req.body;
    const description = await generateSunsetDescription(weatherData);
    res.json({ description });
  } catch (error) {
    console.error('Error generating AI description:', error);
    res.status(500).json({ error: 'Error generating description' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
