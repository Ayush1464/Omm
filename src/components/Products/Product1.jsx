import React from 'react';
import "./Product1.css";
import { Link } from 'react-router-dom';


const Product1 = () => {
  return (
    <>
      <div className='product'>
      <h1 style={{ textAlign: 'center', fontSize: '30px' }}>
  <span className="heading-underline" style={{ color: '#007bff' }}>
    Energy Effecient Products
  </span>
</h1>
        <p className="support-info">
          These products are supported by EESL under the Government of India.
        </p>
      </div>
      
      <section className="ongoing-projects">
        <div className="project-list">
          <div className="project-card">
            <Link to="/Bulb">
              <img src="./assets/bulb.jpeg" alt="Project Image" />
              <div className="project-content">
                <h3>Bulb 9W</h3>
                <p>
                  This project focuses on installing solar panels in residential
                  areas to promote renewable energy.
                </p>
              </div>
            </Link>
          </div>
          <div className="project-card">
            <Link to="/Tube">
              <img src="./assets/tube.jpeg" alt="Project Image" />
              <div className="project-content">
                <h3>Tube Light 200W</h3>
                <p>
                  A community-driven solar farm project to provide sustainable
                  energy for local residents.
                </p>
              </div>
            </Link>
          </div>
          <div className="project-card">
            <Link to="/Fan">
              <img src="./assets/fan.jpeg" alt="Project Image" />
              <div className="project-content">
                <h3>FAN (BLDE) 5W - 20W</h3>
                <p>
                  This initiative aims to install green roofs to enhance energy
                  efficiency in urban buildings.
                </p>
              </div>
            </Link>
          </div>
          <div className="project-card">
            <Link to="/Ac">
              <img src="./assets/ac.jpeg" alt="Project Image" />
              <div className="project-content">
                <h3>AC 1.5 Ton 750W</h3>
                <p>
                  Installation of solar water heaters in commercial buildings to
                  reduce energy consumption.
                </p>
              </div>
            </Link>
          </div>
          <div className="project-card">
            <Link to="/Induction">
              <img src="./assets/induction.jpeg" alt="Project Image" />
              <div className="project-content">
                <h3>Induction Cooker 1200W</h3>
                <p>
                  An educational program to teach communities about the benefits
                  of solar energy.
                </p>
              </div>
            </Link>
          </div>
          <div className="project-card">
            <Link to="/Ebicycle">
              <img src="./assets/ecycle.jpeg" alt="Project Image" />
              <div className="project-content">
                <h3>E Bicycle</h3>
                <p>
                  This project involves installing rooftop solar systems for
                  businesses to reduce their carbon footprint.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product1;
