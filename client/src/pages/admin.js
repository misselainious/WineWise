import React, { Component } from "react";
import Inv from '../pdf_files/inventory.pdf'
import Desc from '../pdf_files/WineWise_priceList.pdf'
import German from  '../pdf_files/priceList_Germany.pdf'
import Sparkling from  '../pdf_files/priceList_Sparkling.pdf'
import {
  Grid,
  Button,
  Message,
  Header
} from 'semantic-ui-react';


// const options = [
//   { key: 'r', text: 'Red', value: 'Red' },
//   { key: 'w', text: 'White', value: 'White' },
//   { key: 's', text: 'Sparkling', value: 'Sparkling' },
//   { key: 'ro', text: 'Rose', value: 'Rose' },
//   { key: 'd', text: 'Dessert', value: 'Dessert' },
// ]
// const countryOptions = [
//   { key: 'f', text: 'France', value: 'France' },
//   { key: 'g', text: 'Greece', value: 'Greece' },
//   { key: 's', text: 'Spain', value: 'Spain' },
//   { key: 'p', text: 'Portugal', value: 'Portugal' },
// ]


class Admin extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    producer: "",
    wine: "",
    region: "",
    subregion: "",
    code: "",
    description: ""
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  // handleInputChange = (event, { value }) => {
  //   //this will capture form input
  //   this.setState({ [event.target.name]: event.target.value });
  // }
  // // separate onChange methods to assign state for Select form values
  // handleSelectCountryChange = ({ value }) => this.setState({ country: value })
  // handleSelectColorChange = ({ value }) => this.setState({ color: value })

  // handleFormSubmit = event => {
  //   // console.log(this);
  //   event.preventDefault();
  //   if (this.state.producer) {
  //     API.saveWine({
  //       producer: this.state.producer,
  //       wine: this.state.wine,
  //       color: this.state.color,
  //       country: this.state.country,
  //       code: this.state.code,
  //       region: this.state.region,
  //       subregion: this.state.subregion,
  //       description: this.state.description
  //     })
  //       // .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };
  render() {
    // const { value } = this.state
    // const { pageNumber, numPages } = this.state;
    return (
      <Grid centered style={{ marginTop: '100px', marginBottom: '100px'}}>

      <Grid.Row>
      <Message color='brown'>
        <Message.Header> 
          <i class="box icon"></i>
          Welcome to the Trade section of WineWise
        </Message.Header>
        <p style={{fontSize: '1em'}}>
          Please click on an item below to view.
        </p>
      </Message>
      </Grid.Row>

      <div class="ui divider"></div>


        <Grid.Row  centered columns={3} >
          <Grid.Column textAlign='right'>
        <a href = {Inv} target = "_blank" rel="noopener noreferrer">
          <Button circular color = "brown" target="_blank" rel="noopener noreferrer">
            Price List
          </Button>
          </a>
          </Grid.Column>
          <Grid.Column textAlign='left' width={7}>
          <p style={{fontSize: '1em'}}>Weekly updated list of available inventory.</p>
        </Grid.Column>
        </Grid.Row>

        <Grid.Row centered columns={3} >
        <Grid.Column textAlign='right'>
        <a href = {Desc} target = "_blank" rel="noopener noreferrer">
          <Button circular color="brown" target="_blank" rel="noopener noreferrer">
            Item Descrptions
          </Button>
          </a>
          </Grid.Column>
          <Grid.Column textAlign='left' width={7}>
          <p style={{fontSize: '1em'}}>Detailed desciptions of all of our wines.</p>
        </Grid.Column>
        </Grid.Row>

        <Grid.Row  centered columns={3} >
          <Grid.Column textAlign='right'>
        <a href = {German} target = "_blank" rel="noopener noreferrer">
          <Button circular color = "brown" target="_blank" rel="noopener noreferrer">
            German
          </Button>
          </a>
          </Grid.Column>
          <Grid.Column textAlign='left' width={7}>
          <p style={{fontSize: '1em'}}>List of German offerings only.</p>
        </Grid.Column>
        </Grid.Row>

        <Grid.Row centered columns={3} >
        <Grid.Column textAlign='right'>
        <a href = {Sparkling} target = "_blank" rel="noopener noreferrer">
          <Button circular color="brown" target="_blank" rel="noopener noreferrer">
            Sparkling
          </Button>
          </a>
          </Grid.Column>
          <Grid.Column textAlign='left' width={7}>
          <p style={{fontSize: '1em'}}>List of Sparkling offerings only.</p>
        </Grid.Column>
        </Grid.Row>


      </Grid>
    )
  }
}

export default Admin
