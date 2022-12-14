import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import "../App.css";
import "../navbar.css"
import Contact from './Contact';

const NavBar = () => {
  return (
    <div className="navbar">
    <nav>
    <div
        className="navigation-menu">
      <ul>
      <li><Link to ="/services">Services</Link></li>
        

        <li><Link to ="/appointments">Book an Appointment</Link></li>

        <li><Link to ="/gallery">Gallery</Link></li>

        <li><Link to ="/contact">Contact</Link></li>

        <li><Link to ="/FAQ">FAQ</Link></li>

        <li><Link to ="/about">About</Link></li>

        <li><Link to ="/login">Login</Link></li>

      </ul>
      </div>
    </nav>
    </div>
  )
}

export default NavBar;


