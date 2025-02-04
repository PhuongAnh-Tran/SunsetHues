import React from 'react';

const SunsetDisplay = ({ prediction }) => {
  return (
    <div className="sunset-card">
      <div
        className="sunset-card__color"
        style={{ background: prediction.gradient || prediction.color }}
      />
      <div className="sunset-card__details">
        <h2>{prediction.color}</h2>
        <p><strong>Time:</strong> {prediction.time}</p>
        <p>{prediction.description}</p>
      </div>
    </div>
  );
};

export default SunsetDisplay;
