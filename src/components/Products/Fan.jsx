import React from 'react';
import './Fan.css'; // Import CSS file for styling

const Fan = () => {
  return (
    <div className="fan-container">
      <img 
        src="./assets/fan.jpeg" 
        alt="Energy Efficient Fan" 
        className="fan-image" 
      />
      <div className="fan-content">
        <h2>Energy Efficient Fan</h2>
        <p>
          Our Energy Efficient Fan is designed to provide optimal air circulation while 
          minimizing energy consumption. With its sleek and modern design, it seamlessly 
          fits into any room decor, making it perfect for homes and offices alike.
        </p>
        <p>
          Equipped with advanced technology, this fan operates quietly and efficiently, 
          ensuring a comfortable environment. Experience the perfect blend of style and 
          functionality with our Energy Efficient Fan.
        </p>
      </div>
    </div>
  );
}

export default Fan;
