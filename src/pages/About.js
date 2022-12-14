import React, { Component } from "react";
import kimPic from '../pics/kimPic.jpg';
import Hours from '../pics/Hours.jpg';
 
class About extends Component {
  render() {
    return (
      <div>
       <h1 className="title">ArchDeco</h1>
        <h2>Hello Gorgeous</h2>
        <h4>Are you ready for the best brows of your life?</h4>
<div className="profile">
        <img className = "profilePic" src= {kimPic}></img>
        <h3 className="ptag">Hi, I'm Kim! Owner and Founder of Arch Deco Brows. I'm passionate about my work and will take the time to create the best brow shape for your facial features. I recieved my training at one of Florida's top-ranked Permanent Makeup salons where I was guided and taught by other great artists.</h3>
        </div>
        <img className = "hours" src= {Hours}></img>
  
      </div>
    );
  }
}
 
export default About;