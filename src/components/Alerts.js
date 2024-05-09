import React from 'react';

function Alerts({ location, temperature, normalTemperature }) {
  const isAboveNormal = temperature > normalTemperature;

  return (
    <div>
      {isAboveNormal && (
        <div className="alert">
           <p>
            Warning: Temperature in {location} is above normal! Current
            temperature: {temperature}°
          </p>
          <p>
            Normal temperature: {normalTemperature}°
          </p>
        </div>
      )}
    </div>
  );
}

export default Alerts;
