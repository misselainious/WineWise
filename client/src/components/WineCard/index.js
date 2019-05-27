import React from 'react'
import { Link } from "react-router-dom";
import { Card, Image } from 'semantic-ui-react'
// import {Moon, Female, Leaf, Sun} from '../../components/Labels/Labels'
import "./Winecard.css";

const Winecard = (props) => (

  <Link to={"/details/" + props.wineid} >
  
    <Card className="card" >

      {(props.url === "") ? <Image className="cardImage"src='/images/StockRED.png' />
        :
        // Else Renders row with image from url:
        <Image className="cardImage" src={`https://gdurl.com${props.url}`} />

        // For rendering image from individual folder:
        // <Image className="cardImage" src={`/images/bottle/${props.Code}.png`}/>
      }
 {/* CORNER LABELS */}

  {/* { ((props.farming === "Organic") || (props.farming === "Certified Organic" )) && <Leaf />}
  { ((props.farming === "Bio-dynamic") || (props.farming === "Certified Bio-dynamic" )) && <Moon />}
  { props.farming === "HEV" && <Sun />}
  { props.female === "Female Winemaker"  && <Female />} */}


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


