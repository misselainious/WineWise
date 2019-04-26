import React, { Component } from "react";
import HomeHeading from "../components/Homepage/HomeHeading/HomeHeading";
import Carousel from "../components/common/Carousel/Carousel";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Winecard from "../components/WineCard"
import Justin from "../components/JustIn/justin";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
  Responsive
} from 'semantic-ui-react';
import { createCipher } from "crypto";

const Home = () => (
  
<div>

{/* Only shows if on mobile */}
<Responsive maxWidth={768} >
<Image src="../images/group/LinkedIn.png" />
 <Grid.Row dividing>
 <Header as='h1'style={{ fontSize: '4em', color: '#962d2d'}}>WineWise</Header>
 </Grid.Row>
</Responsive>

<Grid centered style={{marginTop: '20px'}}>
{/* Shows On Desktop */}
 <Grid.Row>
 <Carousel />
 </Grid.Row>

    {/* <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container verticalAlign='middle'> */}
      <Responsive>
        <Grid columns='equal'>
        <Grid.Row >

          <Grid.Column width={8} style={{marginLeft: '20px'}} >
            <Header as='h3' style={{ textAlign: 'center', fontSize: '3em' }}>
              WineWise
            </Header>
            <p textAlign='justified' style={{ fontSize: '1.1em' }}>
              Since 1989, Wine Wise has been importing some of the finest estate-grown wines from France, Germany, Austria, Spain, Portugal and Greece. Our speciality is small family firms that offer over-performing wines and exceptional value. Grower Champagnes and other sparkling wines are a particular area of emphasis for Wine Wise.
            </p>
            <Link to="/allwines">
            <Button className="seeAllWinesBtn" size='small'>
              <p className="seeAllWinesText">See All Wines</p>
            </Button>
            </Link>
          </Grid.Column>

          <Grid.Column >
            <Image bordered rounded size='medium' src='/images/vineyard.jpg' />
          </Grid.Column>

        </Grid.Row>
        </Grid>
        </Responsive>
{/* 
      </Grid>
    </Segment> */}


    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Our Mission
        </Header>
        <p style={{ fontSize: '1em' }}>
          The philosophy of Wine Wise is straightforward: we seek wines of character from people we like and places which are not always well-known or popular. We are not averse to the classics, but we are not scared of the obscure. Our wines do not have to meet any ideological litmus test, but we do have to like them. If they are grown organically it does not hurt, but we don’t insist on it. While we have a number of sought-after and expensive wines in our portfolio, our animating force is the acquisition of great wines that almost anyone can afford to drink – a rather more exacting discipline than the converse. Above all, we like people. Our growers tend to be interesting and often amusing people, sometimes with a spiritual bent, sometimes unrepentantly earthy. We have watched with pleasure as the sons and daughters we knew as babies and children have grown up to be the proprietors of their parents’ estates. We like to think of ourselves as the link between these friends and the people drinking their wines in restaurants or at home. We have developed from an essentially one-man band into a team with a dozen or so sales representatives spanning virtually the entire state of California and a small phalanx of impossibly clever people handling the many functions that lie beyond the principals’ capabilities. We are very lucky people!
        </p>
        <Link to='/aboutus'>
        <Button className="seeAllWinesBtn" size='small'>
          <p className="seeAllWinesText">Read More</p>
        </Button>
        </Link>

        <Divider
                        as='h2'
                        className='header'
                        horizontal
                        style={{ color: '#962d2d', margin: '1em 0em', textTransform: 'uppercase' }}>
                        FEATURED WINE
                    </Divider>
        <Header as='h3' style={{ fontSize: '1.5em' }}>
        Labruyere (2013) “Page Blanche” Blanc de Blancs Grand Cru Brut
        </Header>
        <p style={{ fontSize: '1em' }}>
        This new iteration of the wine formally known as “Op. No.12” draws heavily on the arcane varieties planted in
the Clos du Mont Dorin, a small vineyard situated right at the winery. As such, it is impossible to dismiss
comparisons with Aubry. But it stands on its own feet by dint of its seething mass of flavours - white fruits,
citrus, salt – and its prodigious length on the palate. It is dosed at 9 gm.. It is a blend of 48% 2014 and 52%
2013, vintages that imbue the wine with uncommon nervosity and cut. 
        </p>

        <Grid.Column centered floated='right' width={6}>
          <Image style={{marginLeft:'auto', marginRight:'auto' }} bordered rounded size='medium' src={`https://gdurl.com/iI84`} />
          <Link to='/details/5cb9e89a15cc7a2225ed1c60'>
        <Button className="seeAllWinesBtn" style={{ display: 'block', marginRight: 'auto', marginLeft: 'auto', color: '#962d2d', marginTop:'15px' }} size='small'>
          <p className="seeAllWinesText">View Wine</p>
        </Button>
        </Link>
        </Grid.Column>
        <br />



      </Container>
    </Segment>
<Grid.Row>
    <Justin />
    </Grid.Row>
    </Grid>
    </div>
)
export default Home;
