import React from "react";
import PropTypes from "prop-types";
import { Container, Header } from "semantic-ui-react";

const HomeHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='WineWise'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '2.2em',
        fontFamily: 'Merriweather',
        textShadowColor: 'rgba(0, 0, 0, 0)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
      }}
    />
    <img src="../images/winewiselogo.png"
      className={'ui centered small image'} />
    <Header as='h2' inverted color = 'grey'>Imported wines. Local people.</Header>

  </Container>
)

HomeHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomeHeading;