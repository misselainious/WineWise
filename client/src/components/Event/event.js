import React, { Component } from "react";
import { Button, Header, Icon, Segment, Advertisement, Image } from 'semantic-ui-react'
import './event.css';

const Event = () => (
    <div>
    <Segment inverted color='grey' attached ='top'> 
        <Header  className='banner'>
        Selections for 
        <Header target="_blank" href='https://www.mastersofwine.org' className='banner' style= {{ display: 'inline'}}> Masters of Wine </Header>
        Champagne Tasting
        </Header>
    </Segment>
    <Segment attached className='chosenProducers'>
        <Header className='linked' href='https://www.winewise.biz/producerdetails/J%C3%A9r%C3%B4me%20Coessens' style= {{ display: 'inline'}}>Jérôme Coessens, </Header>
        <Header className='linked' href='https://www.winewise.biz/producerdetails/Dehours%20&%20Fils' style= {{ display: 'inline'}}>Dehours & Fils, </Header>
        <Header className='linked' href='https://www.winewise.biz/producerdetails/Diebolt-Vallois' style= {{ display: 'inline'}}>Diebolt-Vallois</Header>
          
        <Image src="../images/group/MOW.png" size='large' centered style={{ marginTop: '20px'}}/>
    </Segment>
    <Segment attached='bottom'>
        We are pleased to announce three of our Champagne Producers will be featured 
        in this prestigious tasting.
    </Segment>
  </div>
)

export default Event