import React from 'react'
import { Link } from "react-router-dom";
import { Card, Button} from 'semantic-ui-react'
import "./index.css";

const Producercard = (props) => {
  return (
    <Link to={"/producerdetails/" + props.id}>
<Card className="card" style={{margin:"10px"}}>
    <Card.Content>
      <Card.Header>{props.producer} {props.header}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.country} <br/> {props.region}</span>
      </Card.Meta>
      <Card.Description> 
      {props.producer.country}
        
          {/* <Button basic color='red' floated='right' className="seeAllWinesBtn" size='small'>
        View Producer
          </Button> */}
        
      </Card.Description>
    </Card.Content>
</Card>
</Link> 
  )
}

export default Producercard
