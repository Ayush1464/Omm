import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import About from './components/About_us/About'

import Complete from './components/Projects/Completed_projects/Complete'
import Ongoing from './components/Projects/Ongoing_projects/Ongoing'
import ScrollToTop from './components/ScrollToTop'
import Product from './components/Products/Product'
import Bulb from './components/Products/Bulb'
import Tube from './components/Products/Tube'
import Fan from './components/Products/Fan'
import Ac from './components/Products/Ac'
import Induction from './components/Products/Induction'
import Ebicycle from './components/Products/Ebicycle'
import Faq from './components/Faq/Faq'
import Completed_projects from './components/Projects/Complete/Completed_projects'
import ImageGallery from './components/Gallery/ImageGallery'
import Services from './components/Products/Services/Services'



const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />

      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/Complete" element={<Complete />} />
      <Route path="/Ongoing" element={<Ongoing />} />
      <Route path="/Completed_projects" element={<Completed_projects />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Bulb" element={<Bulb />} />
      <Route path="/Tube" element={<Tube />} />
      <Route path="/Fan" element={<Fan />} />
      <Route path="/Ac" element={<Ac />} />
      <Route path="/Induction" element={<Induction />} />
      <Route path="/Ebicycle" element={<Ebicycle />} />
      <Route path="/Faq" element={<Faq />} />
      <Route path="/ImageGallery" element={<ImageGallery />} />
      <Route path="/Services" element={<Services />} />



        

        

      </Routes>
      <Footer/>  
              
    </Router>
  )
}

export default App