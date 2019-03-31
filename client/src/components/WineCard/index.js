import React from 'react'
import { Link } from "react-router-dom";
import { Card, Grid, Image, Button } from 'semantic-ui-react'
import "./Winecard.css";

const img = '/images/StockRED.png'

const Winecard = (props) => (

  <Grid.Column>
    <Card color='olive' className="card" >
      {(props.url === "") ? <Image src='/images/StockRED.png' />
        :
        // Else Renders row with info
        <Image className='cardImage' src={`https://gdurl.com${props.url}`} />
      }
      <Card.Content style={{textAlign: "center"}}>
        <Card.Header className='cardHeader'> {props.producer} {props.header}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.region}, {props.country}</span>
        </Card.Meta>
        <Card.Description> <Link to={"/details/" + props.wineid}>
          <Button className="seeAllWinesBtn" size='small'>
            View Wine</Button>
        </Link> </Card.Description>
      </Card.Content>
    </Card>
  </Grid.Column>

)

export default Winecard


