import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom'; // Import NavLink
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import serviceDetail from '../Inc/ServiceDetail';
import { NavDropdown } from 'react-bootstrap';
import logo from '../Assets/logo.png'
function Header() {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="navbar-cont">
      <Container fluid>
        <Navbar.Brand href="#" style={{ paddingLeft: 50 }}>
          <img
            src={logo}
            style={{ width: 100, backgroundColor:'white' }}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
            {/* Use NavLink with the `isActive` callback */}
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>
              About
            </NavLink>
            <NavDropdown
      title={
        <span
          style={{ color: 'white', fontWeight: 700, fontSize: 18 }}
          className={location.pathname.startsWith('/service') ? 'link active' : 'link'}
        >
          Services
        </span>
      }
      id="basic-nav-dropdown"
      className={location.pathname.startsWith('/service') ? 'link active' : 'link'}
    >
      {serviceDetail.map((s, i) => (
        <NavDropdown.Item key={i}>
          <Link
            className={`linkdeco ${location.pathname === `/service/${s.slug}` ? 'active' : ''}`}
            to={`/service/${s.slug}`}
          >
            {s.title}
          </Link>
        </NavDropdown.Item>
      ))}
    </NavDropdown>

            <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
