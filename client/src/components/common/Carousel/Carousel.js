import React, { Component } from "react";
import HomeHeading from "../../Homepage/HomeHeading/HomeHeading";
import {  Segment, Responsive, Image } from "semantic-ui-react";
import "./carousel.css";


class imageScrolling extends Component {

  state = {
    imageArray: ["group/SBF.png", "group/FEB.png", "group/PAP.png", "group/FCF.png", "group/SVA.png", "group/SIJ3.png", "group/GCS.png", "group/KLB.png", "group/Landereau.png", "group/KLR.png"],
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
      <Responsive minWidth={992}>
      <Segment >
      <Image className="frontImage" src={`./images/${image}`} />
      </Segment>
      </Responsive>
    //   <Segment.Group >
    //   <Responsive className="carousel" as= {Segment} minWidth={992}
    //   textAlign='center'
    //   style={{ width: '80%', height: 'auto', minHeight: 700, padding: '1em 0em', backgroundImage: `url("./images/${image}")` }}
    //   vertical
    // >
    // <HomeHeading />
    // </Responsive>
    // </Segment.Group>
    );
  }
}

export default imageScrolling;
