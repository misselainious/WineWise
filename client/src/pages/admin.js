import React, { Component, Fragment } from "react";
import {
  Grid
} from 'semantic-ui-react';
import { Document, Page, pdfjs } from "react-pdf";
 pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




const options = [
  { key: 'r', text: 'Red', value: 'Red' },
  { key: 'w', text: 'White', value: 'White' },
  { key: 's', text: 'Sparkling', value: 'Sparkling' },
  { key: 'ro', text: 'Rose', value: 'Rose' },
  { key: 'd', text: 'Dessert', value: 'Dessert' },
]
const countryOptions = [
  { key: 'f', text: 'France', value: 'France' },
  { key: 'g', text: 'Greece', value: 'Greece' },
  { key: 's', text: 'Spain', value: 'Spain' },
  { key: 'p', text: 'Portugal', value: 'Portugal' },
]


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
    const { value } = this.state
    const { pageNumber, numPages } = this.state;
    return (
      <Grid style={{ marginTop: '100px', marginBottom: '100px', marginLeft: '100px'}}>
        <Grid.Row>
       <Document 
          file="./images/inventory.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Admin
