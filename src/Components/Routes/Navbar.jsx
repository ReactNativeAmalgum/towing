import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import serviceDetail from '../Inc/ServiceDetail';
import { NavDropdown } from 'react-bootstrap';
import logo from '../Assets/logo.png';

function Header() {
  const location = useLocation();
  const [dropdownOpen, setDropDownOpen] = useState(false);
  const [navbarExpanded, setNavbarExpanded] = useState(false); // New state for navbar expanded

  // Toggle dropdown open/close on dropdown title click
  const handleDropdownClick = () => {
    setDropDownOpen(!dropdownOpen);
  };

  // Close both dropdown and navbar on any link click
  const handleLinkClick = () => {
    setDropDownOpen(false);
    setNavbarExpanded(false); // Close the navbar
  };

  return (
    <Navbar expanded={navbarExpanded} onToggle={setNavbarExpanded} style={{ backgroundColor: 'white', color: 'black' }} expand="lg" className="navbar-cont">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={logo}
            style={{ width: 100, backgroundColor: 'white' }}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setNavbarExpanded(!navbarExpanded)} />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')} onClick={handleLinkClick}>
              Home
            </NavLink>
            <NavLink to="/car-towing-services-andheri" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')} onClick={handleLinkClick}>
              About
            </NavLink>

            <NavDropdown
              show={dropdownOpen} // Control the dropdown open state
              onClick={handleDropdownClick} // Toggle dropdown on title click
              title={
                <span
                  style={{ color: 'black', fontWeight: 700, fontSize: 18 }}
                  className={location.pathname.startsWith('/top-car-towing-services-andheri-west') ? 'link active' : 'link'}
                >
                  Services
                </span>
              }
              id="basic-nav-dropdown"
              className={location.pathname.startsWith('/top-car-towing-services-andheri-west') ? 'link active' : 'link'}
            >
              {serviceDetail.map((s, i) => (
                <NavDropdown.Item key={i}>
                  <Link
                    className={`linkdeco ${location.pathname === `/top-car-towing-services-andheri-west/${s.slug}` ? 'active' : ''}`}
                    to={`/top-car-towing-services-andheri-west/${s.slug}`}
                    onClick={handleLinkClick} // Close both dropdown and navbar
                  >
                    {s.title}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <NavLink to="/all-types-of-towing-services" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')} onClick={handleLinkClick}>
              Gallery
            </NavLink>
            <NavLink to="/towing-services-near-andheri" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')} onClick={handleLinkClick}>
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
