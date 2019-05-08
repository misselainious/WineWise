import React, { Component } from "react";
import HomeHeading from "../components/Homepage/HomeHeading/HomeHeading";
import Carousel from "../components/common/Carousel/Carousel";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Winecard from "../components/WineCard"
import Justin from "../components/JustIn/justin";
import Feature from "../components/FeaturedWine/feature"

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Responsive,
  Label
} from 'semantic-ui-react';
import { createCipher } from "crypto";

const Home = () => (
  
<div>

{/* Only shows if on mobile */}
<Responsive maxWidth={768} >

<Image src="../images/group/LinkedIn.png" />
 <Grid.Row dividing>
 <Header as='h1'style={{ textAlign: 'center', fontSize: '4em', color: '#962d2d'}}>WineWise</Header>
 </Grid.Row>

<Grid centered>
 <Grid.Row>
   <Grid.Column width={14}>
    <Divider
        as='h2'
        className='header'
        horizontal
        style={{ color: '#962d2d', margin: '1em 0em', textTransform: 'uppercase' }}>
        Our mission
      </Divider>

     
        <p textAlign='justified' style={{ padding:'20px',fontSize: '1.2em' }}>
          Since 1989, Wine Wise has been importing some of the finest estate-grown wines from France, Germany, Austria, Spain, Portugal and Greece. Our speciality is small family firms that offer over-performing wines and exceptional value. Grower Champagnes and other sparkling wines are a particular area of emphasis for Wine Wise.
        </p>
            
      <Link to="/allwines">
        <Button className="seeAllWinesBtn" size='small'>
        <p className="seeAllWinesText">See All Wines</p>
        </Button>
      </Link>
   </Grid.Column>
 </Grid.Row>

 <Grid.Row>
  <Justin />
 </Grid.Row>

 </Grid>

</Responsive>



{/* Only Shows On Desktop */}
<Responsive minWidth={768}>
 <Grid centered style={{marginTop: '20px'}}>

  <Grid.Row>
   <Carousel />
  </Grid.Row>


  <Grid.Row columns={2} divided >

   <Grid.Column width={8} >

    <Divider
      as='h2'
      className='header'
      horizontal
      style={{ color: '#962d2d', margin: '1em 0em', textTransform: 'uppercase' }}>
      Our mission
    </Divider>

    <Image src="../images/vineyard.jpg" size='large' centered/>
      <p textAlign='justified' style={{ padding:'20px',fontSize: '1.2em' }}>
        Since 1989, Wine Wise has been importing some of the finest estate-grown wines from France, Germany, Austria, Spain, Portugal and Greece. Our speciality is small family firms that offer over-performing wines and exceptional value. Grower Champagnes and other sparkling wines are a particular area of emphasis for Wine Wise.
      </p>
          
    <Link to="/allwines">
      <Button className="seeAllWinesBtn" size='small'>
      <p className="seeAllWinesText">See All Wines</p>
      </Button>
    </Link>
  
   </Grid.Column>

 <Feature />

 </Grid.Row>

 <Grid.Row>
  <Justin />
 </Grid.Row>
    
</Grid>
</Responsive>
</div>
)
export default Home;
