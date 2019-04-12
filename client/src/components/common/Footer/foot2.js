import React from "react";
import { Segment, Container, Icon, Grid, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';

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
      <Button target="_blank" href='https://www.facebook.com/winewiseimports'size='tiny' color='facebook'>
      <Icon name='facebook' /> Facebook
    </Button>
    <Button target="_blank" href='https://www.linkedin.com/company/winewise-llc/?viewAsMember=true' size='tiny' color='linkedin'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    <Button target="_blank" href='https://www.instagram.com/wine_wise/' size='tiny' color='instagram'>
      <Icon name='instagram' /> Instagram
    </Button>
      </Grid.Column>
    </Grid>
    
    </Container>
  </Segment>
);

export default Footer;
