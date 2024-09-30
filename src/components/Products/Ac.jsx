import React from 'react';
import './Ac.css'; // Import CSS file for styling

const Ac = () => {
  return (
    <div className="ac-container">
      <img 
        src="./assets/ac.jpeg" 
        alt="Energy Efficient AC" 
        className="ac-image" 
      />
      <div className="ac-content">
        <h2>Energy Efficient AC</h2>
        <p>
          Our Energy Efficient Air Conditioner is designed to provide optimal cooling while 
          minimizing energy consumption. With advanced inverter technology, this AC adjusts 
          its cooling power based on the room temperature, ensuring maximum comfort and energy savings.
        </p>
        <p>
          Ideal for both residential and commercial spaces, it operates quietly and effectively 
          while maintaining the desired temperature. Enjoy a cool and refreshing environment 
          while being environmentally conscious with our energy-efficient AC solution.
        </p>
      </div>
    </div>
  );
}

export default Ac;
