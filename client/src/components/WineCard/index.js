import React from 'react'
import { Link } from "react-router-dom";
import { Card, Grid, Image, Button, Label } from 'semantic-ui-react'
import "./Winecard.css";

const img = '/images/StockRED.png'

const Winecard = (props) => (

  <Link to={"/details/" + props.wineid} >
  
    <Card className="card" >

      {(props.url === "") ? <Image className="cardImage"src='/images/StockRED.png' />
        :
        // Else Renders row with image from url:
        <Image className="cardImage" src={`https://gdurl.com${props.url}`} />
        //For rendering image from individual folder:
        // <Image className="cardImage" src={`/images/individual/${props.Code}.png`}/>
      }
 
      <Card.Content style={{textAlign: "center"}}>
        <Card.Header className='cardHeader'>{props.producer} {props.header}</Card.Header>
        <Card.Meta className='cardData'>
          <span>{props.region}, {props.country}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
    </Link> 
 
)

export default Winecard


