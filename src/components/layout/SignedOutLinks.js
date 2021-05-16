import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import NavLink from 'react-router-dom/NavLink';
import './log.css'


const SignedOutLinks = () => {
  return (
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="ml-auto">
        <NavLink to="./Signup1" className="color">SignUp1</NavLink>
        <NavLink to="./signup" className="color">SignUp</NavLink>
        <NavLink to="./signin" className="color">Login</NavLink>
        <NavLink to="./Admin" className="color">Admin</NavLink>
      </Nav>
    </Navbar.Collapse>
  );
}

export default SignedOutLinks