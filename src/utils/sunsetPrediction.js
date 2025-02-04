export const predictSunset = (weatherDay) => {
    // Extract necessary data for the specific day
    const { clouds, humidity, sunset } = weatherDay;

    let color = '';
    let description = '';
    let gradient = '';

// Determine the sunset color based on cloud coverage and humidity

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

    // Convert the sunset time to a human-readable format
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    // Return the prediction for this specific day
    return { color, time: sunsetTime, description, gradient };
};
