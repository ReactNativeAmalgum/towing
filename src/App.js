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
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/service' element={<Service />} />
          <Route path='/service/:id' element={<Service />} />

          <Route path='/contact' element={<Contact />} />

          <Route path='*' element={<NotFound />} /> {/* Catch-all route for 404 */}

        </Routes>
        <Footer />
      </>
    </Router>
  )
}
