import React from 'react';
import './Tube.css'; // Import CSS file for styling

const Tube = () => {
  return (
    <div className="tube-container">
      <img 
        src="./assets/tube.jpeg" 
        alt="Energy Efficient Tube Light" 
        className="tube-image" 
      />
      <div className="tube-content">
        <h2>Energy Efficient Tube Light</h2>
        <p>
          Our Energy Efficient Tube Light provides high-quality illumination while 
          consuming minimal energy. Ideal for both residential and commercial spaces, 
          this tube light offers a long lifespan of up to 30,000 hours, reducing 
          maintenance costs.
        </p>
        <p>
          With its sleek design and bright output, it enhances the ambiance of any room 
          while supporting energy-saving initiatives. Upgrade your lighting today!
        </p>
      </div>
    </div>
  );
}

export default Tube;
