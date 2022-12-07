import React, { Component } from "react";
import Qualifications from '../pics/Qualifications.jpg';
import Terms from '../pics/Terms.jpg';
import Contradictions from '../pics/Contradictions.jpg';
import Prior2Apt from '../pics/Prior2Apt.jpg';
 
class FAQ extends Component {
 

  render() {
    return (
      <div>
      <h2>FAQs</h2>
      <br></br>
      <h3>Please Read the following before booking an appointment:</h3>
      <img className = "qualifications" src= {Qualifications}></img>
      <br></br>
      <img className = "contradictions" src= {Contradictions}></img>
      <br></br>
      <img className = "bfApt" src= {Prior2Apt}></img>
      <br></br>
      <img className = "terms" src= {Terms}></img>
    </div>
    );
  }
}
 
export default FAQ;