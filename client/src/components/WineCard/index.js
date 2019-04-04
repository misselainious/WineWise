import React from 'react'
import { Link } from "react-router-dom";
import { Card, Grid, Image, Button } from 'semantic-ui-react'
import "./Winecard.css";

const img = '/images/StockRED.png'

const Winecard = (props) => (

  <Link to={"/details/" + props.wineid}>
    <Card className="card" >
      {(props.url === "") ? <Image src='/images/StockRED.png' />
        :
        // Else Renders row with info
        <Image className="cardImage" src={`https://gdurl.com${props.url}`} />
      }

      <Card.Content style={{textAlign: "center"}}>
        <Card.Header className='cardHeader'>{props.producer} {props.header}</Card.Header>
        <Card.Meta className='cardData'>
          <span className='date'>{props.region}, {props.country}</span>
        </Card.Meta>
      </Card.Content>
      {/* <Card.Content extra>
              <a>
                more here
              </a>
            </Card.Content> */}
    </Card>
    </Link> 
 
)

export default Winecard


