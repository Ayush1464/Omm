import React from 'react';
import './Bulb.css'; // Import CSS file for styling

const Bulb = () => {
  return (
    <div className="bulb-container">
      <img 
        src="./assets/bulb.jpeg" 
        alt="Energy Efficient Bulb" 
        className="bulb-image" 
      />
      <div className="bulb-content">
        <h2>Energy Efficient Bulb</h2>
        <p>
          Our Energy Efficient Bulb is designed to reduce energy consumption 
          while providing bright, quality lighting. Perfect for home and 
          commercial use, this bulb can last up to 25,000 hours, significantly 
          reducing replacement costs and environmental impact.
        </p>
        <p>
          With its sleek design and high lumen output, it enhances any space 
          while promoting sustainability. Switch to energy-efficient lighting 
          today!
        </p>
      </div>
    </div>
  );
}

export default Bulb;
