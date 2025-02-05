# 🌅 Sunset Hues – AI-Powered Sunset Predictor
Predict sunset colors & get AI-generated poetic descriptions based on real-time weather data.

🚀 Live Demo
👉 *[Try the App Here](https://sunset-hues.onrender.com/)*

# ✨ Features
🔮 Sunset Color Prediction – Predicts the sky’s hues based on weather conditions.

🖼 AI-Generated Descriptions – Provides poetic descriptions of the sunset using OpenAI API.

🌍 Real-Time Weather Data – Fetches real-time weather data from OpenWeather API.

🎨 Dynamic UI – Displays sunset colors as gradients for a visually immersive experience.

# 🎯 How It Works
1️⃣ Enter a location and select a date (up to 7 days ahead).

2️⃣ The app fetches weather data from OpenWeather API.

3️⃣ The backend processes the data and requests a poetic description from OpenAI.

4️⃣ The frontend displays predicted sunset colors & AI-generated text.

# 🛠️ Tech Stack
Category: Technology

Frontend: React, Vite, Axios

Backend: Node.js, Express

AI Integration: OpenAI GPT-3.5

API: OpenWeather API

Deployment: Render

# 🖥️ Installation & Setup
1️⃣ Clone the Repository

git clone https://github.com/PhuongAnh-Tran/SunsetHues.git

cd SunsetHues

2️⃣ Install Dependencies

- Frontend

cd src

npm install

- Backend

cd ../server

npm install

3️⃣ Set Up Environment Variables

Create a .env file in the server directory and add:

OPENAI_API_KEY=your_openai_api_key

WEATHER_API_KEY=your_openweather_api_key

4️⃣ Run the Application

- Start Backend Server

cd server

npm start

- Start Frontend

cd ../frontend

npm run dev

Now, visit http://localhost:5173/ to use the app locally.

# 🔥 Challenges & Learnings

CORS Issues: Debugged and resolved cross-origin restrictions when deploying on Render.

API Rate Limits: Handled OpenWeather API’s limitations efficiently.

Full-Stack Deployment: Successfully deployed both frontend and backend while managing dependencies.

# ⏭️ Future Improvements

🌅 Historical Sunset Data – View past sunset predictions.

📍 User Location Detection – Automatically fetch weather data based on user’s location.

🌎 Global Weather Support – Support for more locations with enhanced accuracy.

# 🏆 Acknowledgments
OpenWeather API for real-time weather data.
OpenAI API for text generation.
Render for hosting services.
