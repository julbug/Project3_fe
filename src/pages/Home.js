import React, { Component } from "react";
import kimPic from '../pics/kimPic.jpg';
import Hours from '../pics/Hours.jpg';
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Hello Gorgeous</h2>
        <h4>Are you ready for the best brows of your life?</h4>
<div className="profile">
        <img className = "profilePic" src= {kimPic}></img>
        <p>Hi, I'm Kim! Owner and Founder of Arch Deco Brows. I'm passionated about my work and will take the time to create the best brow shape for your facial features. I recieved my training at one of Florida's top-ranked Permanent Makeup salons where I was guided and taught by other great artists.</p>
        </div>
        <img className = "hours" src= {Hours}></img>
      
      <footer className="footer">

      </footer>
      </div>
    );
  }
}
 
export default Home;