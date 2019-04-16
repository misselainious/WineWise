import React, { Component } from "react";
import HomeHeading from "../../Homepage/HomeHeading/HomeHeading";
import {  Segment, Responsive } from "semantic-ui-react";


class imageScrolling extends Component {

  state = {
    imageArray: ["redWine.png", "vineyard.jpg", "bottleTops.jpg"],
    currentImageIndex: 0
  }
  componentDidMount() {
    const timer = setInterval(() => {
      if (this.state.currentImageIndex === this.state.imageArray.length - 1) {
        this.setState({ currentImageIndex: 0 })
      }
      else {
        this.setState({ currentImageIndex: this.state.currentImageIndex + 1 })
      }
    }, 5000)

  }

  render() {
    let image = this.state.imageArray[this.state.currentImageIndex]
    return (
      <Segment.Group>
      <Responsive as= {Segment} minWidth={992}
      
      textAlign='center'
      style={{ minHeight: 700, padding: '1em 0em', backgroundImage: `url("./images/${image}")` }}
      vertical
    >
    <HomeHeading />
    </Responsive>
    </Segment.Group>
    );
  }
}

export default imageScrolling;
