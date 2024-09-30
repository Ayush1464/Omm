import React from 'react'
import './About.css'

const About = () => {
  return (
    <div>
    {/* Blue bar at the top */}
    <div className="blue-bar">
      <h3>OMM ENERGY</h3>
      <h1>Values & Mission</h1>
    </div>
    <div className='heading'>
    <h1 style={{ textAlign: 'center', fontSize: '30px' }}>
  <span className="heading-underline" style={{ color: '#007bff' }}>
    Our Mission , Vision & Values
  </span>
</h1>
    </div>

    {/* Values & Mission Content */}
   <div className='mission'>
    <h1>Mission :</h1>
    <p>To complete 1.5MW of rooftop solar installations in next three years by installing all type of solar products, energy efficient products and double our business year on year.</p>
    <h1>Vision :</h1>
    <p>To Became a Leading Solar EPC player in Eastern India by delivering innovative, reliable and cost effective renewable energy solutions for supporting towards net zero carbon emission & Climate Change.</p>
    <h1>Core Values :</h1>
    <ul>
      <li>1. Trust & Integrity</li>
      <li>2. Qualitative Products</li>
      <li>3. Speed of Execution</li>
      <li>4. Training and Development</li>
      <li>5. Customer Centricity</li>
    </ul>
   </div>

    {/* Timeline Section */}
    <div className="value-mission">
      <div className="row">
        <div className="ellipse">2011<br />enter text<br />enter text</div>
        <div className="arrow right"></div>
        <div className="ellipse">2012<br />enter text<br />enter text</div>
        <div className="arrow right"></div>
        <div className="ellipse">2013<br />enter text<br />enter text</div>
        <div className="arrow right"></div>
        <div className="ellipse">2014<br />enter text<br />enter text</div>
      </div>
      <div className="arrow down"></div>
      <div className="row1">
        <div className="ellipse">2015<br />enter text<br />enter text</div>
        <div className="arrow left"></div>
        <div className="ellipse">2016<br />enter text<br />enter text</div>
        <div className="arrow left"></div>
        <div className="ellipse">2017<br />enter text<br />enter text</div>
        <div className="arrow left"></div>
        <div className="ellipse">2018<br />enter text<br />enter text</div>
      </div>
    </div>

    {/* Footer Text */}
    <div className="energy-text">
      Harvest the wind, water & sun for your energy needs
    </div>
  </div>
  )
}

export default About