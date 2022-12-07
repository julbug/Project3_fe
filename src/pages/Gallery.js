import React, { Component } from "react";
import before1 from '../pics/before1.jpg';
import after1 from '../pics/after1.jpg';
import before5 from '../pics/before5.jpg';
import after5 from '../pics/after5.jpg';
import before6 from '../pics/before6.jpg';
import after6 from '../pics/after6.jpg';
import before7 from '../pics/before7.jpg';
import after7 from '../pics/after7.jpg';
import before8 from '../pics/before8.jpg';
import after8 from '../pics/after8.jpg';

class Gallery extends Component {

state = {
    index: 0,
    picList: [before1, after1, before5, after5, before6, after6, before7, after7, before8, after8]
}

onClickNext= () => {
if (this.state.index + 1 === this.state.picList.length) {
this.setState({
  index: 0
})
} else {
this.setState({
  index: this.state.index + 1
})
}
}
onClickPrevious= () => {
if (this.state.index - 1 === -1 ){
this.setState({
  index: this.state.picList.length - 1
})
} else {
this.setState({
  index: this.state.index - 1
})
}
}
 

  render() {
    return (
      <div>
        <h2>Before and After</h2>
<center>
<div class="frame">
  <div class="mat">
    <div class="art">
        <img src={this.state.picList[this.state.index]}/> 
        </div>
  </div>
</div>
        <br/>
            <button className="beforeAfterBtn" onClick={this.onClickPrevious}> Previous </button>
            <br></br>
            <button className="beforeAfterBtn" onClick={this.onClickNext}> Next </button>
            </center>

      </div>
    );
  }
}
 
export default Gallery;