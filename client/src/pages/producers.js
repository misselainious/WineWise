import React, { Component, createRef } from "react";
// import CheckboxSidebar from "../components/CheckboxSidebar/CheckboxSidebar";
import API from "../utils/API";
import { List } from "../components/List";
import { Grid, Card, Sticky, Rail, Ref, Header, Segment } from "semantic-ui-react";
import Producercard from "../components/ProducerCard"
import SearchProducers from "../components/SearchProducers"
import { createReadStream } from "fs";
import { createRequireFromPath } from "module";

class Producers extends Component {

contextRef = createRef()

    state = {
      Producers: [], 
      isLoading: false
    };
  
    componentDidMount() {
      this.loadProducers();
    }
  
  loadProducers = () => {
    this.setState({
      isLoading: true
    })
    API.getProducers()
      .then(res => {
        //The World's least efficient way of alphabetizing an array of objects
        let idArray=[];
        res.data.map( producer => {idArray.push(producer.Producer)})
        idArray.sort()
        let alphabeticalProducers = []
        idArray.map( id => {
          alphabeticalProducers.push( res.data.find( (producer)=>{ return producer.Producer === id } ))
        })
        this.setState({ Producers: alphabeticalProducers })
      }
      )
      .catch(err => console.log(err));
  };
  
render() {
    return (
        <Grid style={{marginTop: "40px", marginBottom: "40px"}}>
        <Grid.Row>
      <Grid.Column>
        <Header as='h1' textAlign='right' style={{color: '#510409', backgroundColor: '#f2efef', textAlign: 'center', paddingTop: "40px", paddingBottom: "40px"}} >
      Our Producers
    </Header>
    </Grid.Column>
        </Grid.Row>
    
    <Grid.Row>
            <Grid.Column width={3}>
            <center>
              <SearchProducers />         
            </center>
            </Grid.Column>

<Grid.Column width={12}>
        {this.state.Producers.length ? (
          
            <Card.Group itemsPerRow={4}>
          {this.state.Producers.map(producer => (
              <Producercard id={producer._id} producer={producer.Producer} country={producer.Country} region={producer.Region} key={producer._id}/>            
          ))}
        </Card.Group>
            ) : (
              <h3>{this.state.isLoading ? "loading...": "No results to display"}</h3>
            )}
            </Grid.Column>
          
            </Grid.Row>
     </Grid>
    );
  }
}

export default Producers;

