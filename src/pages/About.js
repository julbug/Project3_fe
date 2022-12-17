import React, { Component } from "react";
import kimPic from '../pics/kimPic.jpg';
import Hours from '../pics/Hours.jpg';
import InstagramLogo from '../pics/InstagramLogo.jpg'
 
class About extends Component {
  render() {
    return (
      <div>
       <h1 className="title">ArchDeco</h1>
  
<div className="profile">
        <img className = "profilePic" src= {kimPic}></img>
        <span className="ptag">Hi, I'm Kim! Owner and Founder of Arch Deco Brows located in the heart of downtown Miami. I'm passionate about my work and will take the time to create the best brow shape for your facial features. I recieved my training at one of Florida's top-ranked Permanent Makeup salons where I was guided and taught by other great artists.</span>
        </div>
        <center><img className = "hours" src= {Hours}></img></center>


      <div className="footer">
        <ul className="social-accounts">
          <ul><a href="https://www.instagram.com/_archdeco/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank" rel="noopener" data-bb-track="button" data-bb-track-on="click" data-bb-track-category="Social Icons" data-bb-track-action="Click" data-bb-track-label="Instagram, Footer">
          <span className="instagram" aria-hidden="true">

          </span>
          <h5>Follow Us on Instagram</h5>
          <center><img className = "instagramlogo" src= {InstagramLogo}></img></center>
          </a>
          </ul>
        </ul>
      </div>
  </div>

    );
  }
}
 
export default About;
