import React from 'react';
import './Induction.css'; // Import CSS file for styling

const Induction = () => {
  return (
    <div className="induction-container">
      <img 
        src="./assets/induction.jpeg" 
        alt="Energy Efficient Induction Cooker" 
        className="induction-image" 
      />
      <div className="induction-content">
        <h2>Energy Efficient Induction Cooker</h2>
        <p>
          The Energy Efficient Induction Cooker offers a modern and convenient way to cook 
          your meals quickly and safely. Utilizing advanced induction technology, it heats 
          your cookware directly, providing faster cooking times and reducing energy consumption.
        </p>
        <p>
          With multiple cooking modes and precise temperature control, this induction cooker 
          caters to all your culinary needs. Its sleek and compact design fits seamlessly 
          into any kitchen, making it an ideal choice for those seeking both efficiency and style.
        </p>
      </div>
    </div>
  );
}

export default Induction;
