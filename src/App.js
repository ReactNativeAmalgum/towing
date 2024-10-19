import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Gallery from './Pages/Gallery.jsx'
import Service from './Pages/Services.jsx'
import Contact from './Pages/Contact.jsx'
import Navbar from './Components/Routes/Navbar.jsx'
import Footer from './Components/Routes/Footer.jsx'

export default function App() {
  const NotFound = () => {
    return <h2>404 - Page Not Found</h2>;
  };
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
          <Route path="/top-car-towing-services-andheri-west/:slug" element={<Service />} />
          <Route path='*' element={<NotFound />} /> {/* Catch-all route for 404 */}

        </Routes>
        <Footer />
      </>
    </Router>
  )
}
