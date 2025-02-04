import { OpenAI } from 'openai';
import cors from 'cors';

const corsOptions = {
  origin: 'https://your-frontend-domain.com', // or '*' for development
  // you can add additional options here if needed
};

app.use(cors(corsOptions));
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Generate a creative sunset description using AI via chat completions.
 * @param {Object} weatherData - Weather details (clouds, humidity, sunset).
 * @returns {Promise<string>} - The generated description.
 */
export const generateSunsetDescription = async (weatherData) => {
  const sunsetTime = new Date(weatherData.sunset * 1000).toLocaleTimeString();

  // Construct a message for the user prompt
  const userMessage = `
    Given the following details about a sunset:
    - Cloud coverage: ${weatherData.clouds}%
    - Humidity: ${weatherData.humidity}%
    - Sunset Time: ${sunsetTime}
    and the following logic:
    if (clouds > 80) {
    // Overcast conditions
    if (humidity > 80) {
      color = 'Overcast Plum';
      description = 'Under extremely overcast conditions with high humidity, the sunset is barely visible, cast in deep plum and charcoal shades, evoking a dramatic and introspective mood.';
      gradient = 'linear-gradient(to bottom, rgb(70, 50, 60), rgb(60, 45, 55), rgb(50, 40, 50), rgb(40, 35, 45), rgb(30, 30, 40))';
    } else {
      color = 'Dull Mauve';
      description = 'Heavy cloud cover with slightly lower humidity softens the light into a subdued mauve, with hints of dusty rose and muted purple creating a calm, reflective ambiance.';
      gradient = 'linear-gradient(to bottom, rgb(110, 90, 100), rgb(100, 85, 95), rgb(90, 80, 90), rgb(80, 75, 85))';
    }
  } else if (clouds > 60 && clouds <= 80) {
    // Mostly cloudy conditions
    if (humidity > 70) {
      color = 'Smoky Burnt Sienna';
      description = 'With mostly cloudy skies and high humidity, the sunset is diffused into a smoky burnt sienna interlaced with hints of rust and brown, evoking a moody, vintage feel.';
      gradient = 'linear-gradient(to bottom, rgb(210, 160, 150), rgb(190, 140, 130), rgb(170, 120, 110), rgb(150, 100, 90))';
    } else {
      color = 'Muted Orange';
      description = 'Under mostly cloudy conditions with moderate humidity, the sunset glows in a gentle muted orange with soft red undertones, offering a calming, understated beauty.';
      gradient = 'linear-gradient(to bottom, rgb(255, 179, 166), rgb(245, 155, 140), rgb(235, 140, 120), rgb(225, 125, 100))';
    }
  } else if (clouds > 40 && clouds <= 60) {
    // Partly cloudy conditions
    if (humidity > 60) {
      color = 'Dusty Pastel Pink';
      description = 'Partly cloudy skies with moderate humidity yield a dusty pastel pink hue intermingled with soft lavender and peach, creating a delicate and romantic sunset.';
      gradient = 'linear-gradient(to bottom, rgb(255, 200, 220), rgb(255, 185, 205), rgb(255, 170, 190), rgb(255, 155, 175))';
    } else {
      color = 'Pastel Pink';
      description = 'In partly cloudy conditions with low-to-moderate humidity, the sunset emerges in gentle pastel pink tones with subtle coral accents that softly illuminate the sky.';
      gradient = 'linear-gradient(to bottom, rgb(255, 221, 240), rgb(255, 200, 220), rgb(255, 180, 200), rgb(255, 157, 172))';
    }
  } else if (clouds > 20 && clouds <= 40) {
    // Mostly clear conditions with a few scattered clouds
    if (humidity > 50) {
      color = 'Warm Amber';
      description = 'Scattered clouds combined with moderate humidity produce a warm amber glow, with rich golden hues blended with soft red and orange transitions, evoking a cozy, inviting sunset.';
      gradient = 'linear-gradient(to bottom, rgb(255, 240, 200), rgb(255, 220, 170), rgb(255, 200, 140), rgb(255, 180, 110))';
    } else {
      color = 'Soft Golden';
      description = 'With a nearly clear sky and low humidity, the sunset bursts into soft golden tones accented by hints of orange and yellow, delivering a crisp and radiant display.';
      gradient = 'linear-gradient(to bottom, rgb(255, 245, 210), rgb(255, 230, 180), rgb(255, 215, 150), rgb(255, 200, 120))';
    }
  } else {
    // Clear skies: clouds <= 20
    if (humidity > 40) {
      color = 'Warm Golden';
      description = 'Clear skies with a touch of humidity yield a warm golden sunset, rich with honeyed and amber tones that evoke a sense of calm and wonder.';
      gradient = 'linear-gradient(to bottom, rgb(255, 235, 180), rgb(255, 220, 150), rgb(255, 205, 120), rgb(255, 190, 90))';
    } else {
      color = 'Vibrant Golden';
      description = 'Under pristine, clear skies with low humidity, the sunset explodes into brilliant, vibrant golden hues, with intense oranges and yellows that captivate the viewer.';
      gradient = 'linear-gradient(to bottom, rgb(255, 232, 168), rgb(255, 210, 140), rgb(255, 190, 110), rgb(255, 166, 0), rgb(255, 140, 0))';
    }
  }  

    // Adjust description based on humidity levels
    if (humidity > 60) {
        description += ' Higher humidity might dull the colors slightly.';
    } else {
        description += ' Lower humidity will enhance the vibrancy of the colors.';
    }
    Generate a one sentence (maximum of 25 words) poetic, vivid description of the sunset.
    Mention the colors and explain how visible the sunset will be
    depending on the humidity and cloud coverage. Do not talk about
    the sunset time. If the sunset is not visible, say so explicitly.
  `;
  
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a creative copywriter for an art and design magazine.',
        },
        {
          role: 'user',
          content: userMessage,
        },
      ],
      max_tokens: 60,
      temperature: 0.7,
    });
    // Return the generated text from the assistant's message
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error(
      'Error generating AI description:',
      error.response ? error.response.data : error.message
    );
    return 'A breathtaking display of nature’s palette.';
  }
};
