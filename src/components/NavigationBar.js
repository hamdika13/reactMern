import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
    return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand>
        <Link className = "navbar-brand" to ="/">Muhammad</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link>
            <Link calssName = "nav-link"to ="/user">
                User
                </Link>

        </Nav.Link>
        <Link className= "nav-link" to ="/user">
            About
        </Link>
        <Nav.Link >

        </Nav.Link>
      </Nav>
    
    </Navbar.Collapse>
  </Navbar>
  );
};

export default NavigationBar;
