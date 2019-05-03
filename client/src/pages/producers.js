import React, { Component, createRef } from "react";
// import CheckboxSidebar from "../components/CheckboxSidebar/CheckboxSidebar";
import API from "../utils/API";
import { List } from "../components/List";
import { Grid, Card, Sticky, Rail, Ref, Header, Button, Segment, CommentAction, Menu, Dropdown } from "semantic-ui-react";
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
      window.scrollTo(0, 0)
      this.loadProducers();
    }
  

    loadProducers = () => {

      window.scrollTo(0,0);
      API.getProducers()
      .then(res => 
        this.setState({Producers: res.data})
        )
        .catch(err => console.log(err));
    }



  // loadProducers = () => {
  //   this.setState({
  //     isLoading: true
  //   })
  //   API.getProducers()
  //     .then(res => {
  //       //The World's least efficient way of alphabetizing an array of objects
  //       let idArray=[];
  //       res.data.map( producer => {idArray.push(producer.Producer)})
  //       idArray.sort()
  //       let alphabeticalProducers = []
  //       idArray.map( id => {
  //         alphabeticalProducers.push( res.data.find( (producer)=>{ return producer.Producer === id } ))
  //       })
  //       this.setState({ Producers: alphabeticalProducers })
  //     }
  //     )
  //     .catch(err => console.log(err));
  // };
  
render() {
 let france = this.state.Producers.filter(p => p.Country === "France");
 let spain = this.state.Producers.filter(p => p.Country === "Spain");
 let portugal = this.state.Producers.filter(p => p.Country === "Portugal");
 let greece = this.state.Producers.filter(p => p.Country === "Greece");
 let germany = this.state.Producers.filter(p => p.Country === "Germany");
 let austria = this.state.Producers.filter(p => p.Country === "Austria");

 // Function sorts each country by the 'Order' Column, because it is not necessarily alphabetical.
 function compare(a,b){
   const numA = a.Order;
   const numB = b.Order;

   let comparison = 0;
   if(numA > numB){
     comparison = 1;
   } else if (numA < numB){
     comparison = -1
   }
   return comparison
 }

 france = france.sort(compare);
 spain = spain.sort(compare);
 portugal = portugal.sort(compare);
 greece = greece.sort(compare);
 germany = germany.sort(compare);
 austria = austria.sort(compare);

 
const choices = [
  {key: 1, text: "France", value: 1},
  {key: 2, text: "Spain", value: 2},
  {key: 3, text: "Portugal", value: 3},
  {key: 4, text: "Greece", value: 4},
  {key: 5, text: "Germany", value: 5},
  {key: 6, text: "Austria", value: 6},
]

    return (
        <Grid centered style={{marginTop: "40px", marginBottom: "40px"}}>
        <Grid.Row>
      <Grid.Column>
        <Header as='h1' textAlign='right' style={{color: '#510409', backgroundColor: '#f2efef', textAlign: 'center', paddingTop: "40px", paddingBottom: "40px"}} >
      Our Producers
    </Header>
    </Grid.Column>
        </Grid.Row>
    <Grid.Row>
      <Grid.Column width={11}>
    <center>
      <p style={{fontSize: '1.1em'}}>Our producers are the best producers. Wine is often served with dinner. Be not offended when your ex drinks wine. Cheese is a perennial pair with chardonnay, sauvignon blanc, don't get started on the pinks and reds. Oak imparts vanilla, toast, caramel and coffee. The aftertaste, or "finish," is the primary factor in judging the quality and character of wine. Wines that are named for a region are always capitalized – Bordeaux, Burgundy, Champagne, Rioja, Chianti, Lambrusco, etc. Swine and wine pair well.


      </p>
              {/* <SearchProducers /> */}
            </center>
            </Grid.Column>
            
    </Grid.Row>

    <Grid.Row>
    <Dropdown text='File'>
    <Dropdown.Menu>
      <Dropdown.Item text='New' />
      <Dropdown.Item text='Open...' />
      <Dropdown.Item text='Save as...' description='ctrl + s' />
      <Dropdown.Item text='Rename' description='ctrl + r' />
      <Dropdown.Item text='Make a copy' />
      <Dropdown.Item icon='folder' text='Move to folder' />
      <Dropdown.Item icon='trash' text='Move to trash' />
      <Dropdown.Divider />
      <Dropdown.Item text='Download As...' />
      <Dropdown.Item text='Publish To Web' />
      <Dropdown.Item text='E-mail Collaborators' />
    </Dropdown.Menu>
  </Dropdown>
    </Grid.Row>


<Grid.Row>
<Menu compact>
 <Dropdown text="Jump to Country" onClick={window.location} options={choices} simple item />
</Menu>
</Grid.Row>
{/* FRANCE */}
<Grid.Row>
  <Grid.Column>
<Header as='h1' textAlign='right' style={{color: '#221244', backgroundColor: '#f2efef', textAlign: 'center', paddingTop: "20px", paddingBottom: "20px"}} >
      France
    </Header>
    </Grid.Column>
</Grid.Row>

    <Grid.Row>

<Grid.Column width={12}>
        {france.length ? (
          
            <Card.Group itemsPerRow={4}>
          {france.map(producer => (
              <Producercard id={producer.Producer} producer={producer.Producer} country={producer.Country} subregion={producer.Subregion} region={producer.Region} key={producer._id}/>            
          ))}
        </Card.Group>
            ) : (
              <h3>{this.state.isLoading ? "loading...": "No results to display"}</h3>
            )}
            </Grid.Column>
          
            </Grid.Row>

{/* SPAIN */}
<Grid.Row>
  <Grid.Column>
<Header as='h1' textAlign='right' style={{color: '#221244', backgroundColor: '#f2efef', textAlign: 'center', paddingTop: "20px", paddingBottom: "20px"}} >
      Spain
    </Header>
    </Grid.Column>
</Grid.Row>

    <Grid.Row>

<Grid.Column width={12}>
        {spain.length ? (
          
            <Card.Group itemsPerRow={4}>
          {spain.map(producer => (
              <Producercard id={producer.Producer} producer={producer.Producer} country={producer.Country} subregion={producer.Subregion} region={producer.Region} key={producer._id}/>            
          ))}
        </Card.Group>
            ) : (
              <h3>{this.state.isLoading ? "loading...": "No results to display"}</h3>
            )}
            </Grid.Column>
          
            </Grid.Row>


{/* PORTUGAL */}
<Grid.Row id='id'>
  <Grid.Column>
<Header as='h1' textAlign='right' style={{color: '#221244', backgroundColor: '#f2efef', textAlign: 'center', paddingTop: "20px", paddingBottom: "20px"}} >
      Portugal
    </Header>
    </Grid.Column>
</Grid.Row>

    <Grid.Row>

<Grid.Column width={12}>
        {portugal.length ? (
          
            <Card.Group itemsPerRow={4}>
          {portugal.map(producer => (
              <Producercard id={producer.Producer} producer={producer.Producer} country={producer.Country} subregion={producer.Subregion} region={producer.Region} key={producer._id}/>            
          ))}
        </Card.Group>
            ) : (
              <h3>{this.state.isLoading ? "loading...": "No results to display"}</h3>
            )}
            </Grid.Column>
          
            </Grid.Row>

{/* GREECE */}
<Grid.Row>
  <Grid.Column>
<Header as='h1' textAlign='right' style={{color: '#221244', backgroundColor: '#f2efef', textAlign: 'center', paddingTop: "20px", paddingBottom: "20px"}} >
      Greece
    </Header>
    </Grid.Column>
</Grid.Row>

    <Grid.Row>

<Grid.Column width={12}>
        {greece.length ? (
          
            <Card.Group itemsPerRow={4}>
          {greece.map(producer => (
              <Producercard id={producer.Producer} producer={producer.Producer} country={producer.Country} subregion={producer.Subregion} region={producer.Region} key={producer._id}/>            
          ))}
        </Card.Group>
            ) : (
              <h3>{this.state.isLoading ? "loading...": "No results to display"}</h3>
            )}
            </Grid.Column>
          
            </Grid.Row>

{/* Germany */}
<Grid.Row>
  <Grid.Column>
<Header as='h1' textAlign='right' style={{color: '#221244', backgroundColor: '#f2efef', textAlign: 'center', paddingTop: "20px", paddingBottom: "20px"}} >
      Germany
    </Header>
    </Grid.Column>
</Grid.Row>

    <Grid.Row>

<Grid.Column width={12}>
        {germany.length ? (
          
            <Card.Group itemsPerRow={4}>
          {germany.map(producer => (
              <Producercard id={producer.Producer} producer={producer.Producer} country={producer.Country} subregion={producer.Subregion} region={producer.Region} key={producer._id}/>            
          ))}
        </Card.Group>
            ) : (
              <h3>{this.state.isLoading ? "loading...": "No results to display"}</h3>
            )}
            </Grid.Column>
          
            </Grid.Row>

            {/* AUSTRIA */}
<Grid.Row>
  <Grid.Column>
<Header as='h1' textAlign='right' style={{color: '#221244', backgroundColor: '#f2efef', textAlign: 'center', paddingTop: "20px", paddingBottom: "20px"}} >
      Austria
    </Header>
    </Grid.Column>
</Grid.Row>

    <Grid.Row>

<Grid.Column width={12}>
        {austria.length ? (
          
            <Card.Group itemsPerRow={4}>
          {austria.map(producer => (
              <Producercard id={producer.Producer} producer={producer.Producer} country={producer.Country} subregion={producer.Subregion} region={producer.Region} key={producer._id}/>            
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

