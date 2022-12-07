import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <nav>
    
      <ul>
        <Link to ="/services">Services</Link>

        <Link to ="/appointments">Book an Appointment</Link>

        <Link to ="/gallery">Gallery</Link>

        <Link to ="/contact">Contact</Link>

        <Link to ="/FAQ">FAQ</Link>

        <Link to ="/home">Home</Link>

        <Link to ="/login">Login</Link>
       


      </ul>
    </nav>
  )
}

export default NavBar;




// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import UserContext from "../contexts/UserContext";
// import SignupOrLogin from "./signup";

// export default function Nav() {
// 	const { theUser, logout } = useContext(UserContext);

// 	return (
// 		<div>
// 			{!theUser && (
// 				<div className="login-signup-container">
// 					<SignupOrLogin action="signup" getUserInfo={getUserInfo} />
// 					<SignupOrLogin action="login" getUserInfo={getUserInfo} />
// 				</div>
// 			)}

// 			{theUser && (
// 				<div>
// 					<button onClick={logout}>Logout</button>
// 				</div>
// 			)}

// 			<p>
//       <Link to ="/services">Services</Link>
// 			</p>
// 			<p>
//       <Link to ="/">Home</Link> 
// 			</p>
// 			<p>
//       <Link to ="/appointments">Book an Appointment</Link>
// 			</p>
// 		</div>
// 	);
// }
