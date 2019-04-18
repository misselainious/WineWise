import React from "react";
import { Segment, Container, Icon, Grid, Button, Header, Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => (
  <Segment>
    <Container textAlign="center">
    <Grid relaxed columns={3}>
        <Grid.Column>
            <Grid.Row>
            5655 College Avenue
            </Grid.Row>
            <Grid.Row>
            Oakland, CA 94602
            </Grid.Row>
      </Grid.Column>
      <Grid.Column>
          <Header className="WWFoot" as="h2">
            WineWise
          </Header>
      </Grid.Column>
      <Grid.Column>
      <Button className="social" target="_blank" href='https://www.facebook.com/winewiseimports'size='tiny'>
      <Icon name='facebook' /> Facebook
    </Button>
    <Button target="_blank" href='https://www.linkedin.com/company/winewise-llc/?viewAsMember=true' size='tiny'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    <Button target="_blank" href='https://www.instagram.com/wine_wise/' size='tiny'>
      <Icon name='instagram' /> Instagram
    </Button>
      </Grid.Column>
    </Grid>
    
    </Container>
  </Segment>
);

export default Footer;
