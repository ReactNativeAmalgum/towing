import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Gallery from './Pages/Gallery.jsx'
import Service from './Pages/Services.jsx'
import Contact from './Pages/Contact.jsx'
import Navbar from './Components/Routes/Navbar.jsx'
import Footer from './Components/Routes/Footer.jsx'
import Page404 from './Pages/Page404.jsx'
import { FaSquareWhatsapp, FaWhatsapp, } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPhone } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function App() {

  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/car-towing-services-andheri' element={<About />} />
          <Route path='/all-types-of-towing-services' element={<Gallery />} />
          <Route path='/Top Car Towing Services in Andheri West' element={<Service />} />
          <Route path='/towing-services-near-andheri' element={<Contact />} />
          <Route path="/:slug" element={<Service />} />
          <Route path='*' element={<Page404 />} /> {/* Catch-all route for 404 */}

        </Routes>
        <Footer />
        <div style={{ position: 'fixed', display: 'block', zIndex: '5', bottom: '10px', right: '50px' }}>
          <div style={{ backgroundColor: 'white', padding: 6, borderRadius: 50, display: 'inline-block' }}>

          {/* <FaSquareWhatsapp style={{ backgroundColor: 'white', borderRadius: 10, }} size={50} color='#25D366' /> */}
          <Link
            to="https://wa.me/9820849090"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={50} color='green' />
          </Link>
          </div>
        </div>
        <div style={{ position: 'fixed', display: 'block', zIndex: '5', bottom: '10px', left: '50px', justifyContent: 'center', alignContent: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: 5, borderRadius: 50, display: 'inline-block' }}>
            <Link to={'tel:'}>
            <FontAwesomeIcon style={{ width: 50, borderRadius: 10, height: '100%', }} size={'2x'} color='rgba(255, 195, 38, .95)' icon={faPhone} />

            </Link>
          </div>
        </div>
      </>
    </Router>
  )
}
