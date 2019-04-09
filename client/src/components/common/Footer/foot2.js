import React from "react";
import { Segment, Container, Icon, Grid } from "semantic-ui-react";

const Footer = () => (
  <Segment>
    <Container textAlign="center">
    <Grid relaxed columns={3}>
        <Grid.Column>
        <Icon name="star outline" style={{ marginLeft: "5px" }} />
      WineWise
      <Icon name="star outline" style={{ marginLeft: "5px" }} />
      </Grid.Column>
      <Grid.Column>
          5655 College Avenue
      </Grid.Column>
      <Grid.Column>
          
      </Grid.Column>
    </Grid>
    
    </Container>
  </Segment>
);

export default Footer;
