import React, { Component } from "react";
import { Responsive, Image } from "semantic-ui-react";
import "./carousel.css";


class imageScrolling extends Component {

  state = {
    imageArray: ["group/LinkedIn.png", "group/SBF.png", "group/LH.png", "group/SBG.png", "group/APO.png", "group/PFP.png", "group/PAP.png", "group/FBO.png", "group/SEP.png", "group/FCF.png", "group/SVA.png", "group/SIJ3.png", "group/GCS.png", "group/KLB.png", "group/AHI.png", "group/SPP.png", "group/SCA.png", "group/Landereau.png", "group/KLR.png"],
    currentImageIndex: 0
  }
  componentDidMount() {
    setInterval(() => {
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
      <Responsive minWidth={768}>
  
      <Image className="frontImage" src={`./images/${image}`} />
  
      </Responsive>

    // <HomeHeading />
 
    );
  }
}

export default imageScrolling;
