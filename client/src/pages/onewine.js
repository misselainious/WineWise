import React, { Component } from "react";
import API from "../utils/API";
import { Grid, Table, Segment, Image, Header, Label, Icon, Button} from "semantic-ui-react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

class OneWine extends Component {
  state = {
    wine: {},
    wines: {}
  };
  removeUnderscores(myString){
    return myString.split("_").join(" ")
  }
  componentDidMount() {
    window.scrollTo(0,0);
    API.getWine(this.props.match.params.id)
      .then(res => this.setState({ wine: res.data }))
      .catch(err => console.log(err));
    API.getProducerWines(this.state.wine.Producer)
    .then(res => this.setState( {wines: res.data}))
    .then(console.log(this.state.wines))
    .catch(err => console.log(err));
  }
  componentDidUpdate(prevProps) {
    if (this.props.userID !== prevProps.userID){

    }
  }
  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }

render() {

    const { wine } = this.state;
    delete wine._id
    const wineObjKeys = Object.keys(wine).filter(key => key!=='URL');


    return (
<Grid  id="divToPrint" style={{marginTop: '100px', marginLeft:'20px', marginBottom: '20px'}} >
 <Grid.Row>

  <Grid.Column width={3}>
{/* Renders Photo of wine */}
  <Image >
            { (this.state.wine.URL === "") ?<Image src='/images/StockRED.png'/>
            :
            // Else Renders specific wine image from url:
              <Image src={`https://gdurl.com${this.state.wine.URL}`}/>

              //For when image is in individual folder:
              // <Image src={`/images/individual/${this.state.wine.Code}.png`}/>
            } 
  </Image>

{/* If the wine is Organic, puts a green leaf label */}
  { (this.state.wine.Farming_practices === "Organic") || (this.state.wine.Farming_practices === "Certified Organic" ) ?<Label as='a' color={'olive'}>
<Icon name='leaf' />Organic
</Label>
            :
            // Else Renders empty
            <div></div>
            }

{/* If the wine is Bio-dynamic, puts a blue moon label */}
  { (this.state.wine.Farming_practices === "Bio-dynamic") || (this.state.wine.Farming_practices === "Certified Bio-dynamic" ) ?<Label as='a' color={'blue'}>
<Icon name='moon' />Bio-dynamic
</Label>
            :
            // Else Renders empty
            <div></div>
            }

  {/* If the wine is Organic, puts a pink female label */}
  { (this.state.wine.Female_Winemaker === "Yes" ) ?<Label as='a' color={'pink'}>
<Icon name='venus' />Winemaker
</Label>
            :
            // Else Renders empty
            <div></div>
            }
      
  </Grid.Column>

  <Grid.Column width={6}>
            <Header style={{backgroundColor:'#dfdfbf'}} as='h2' attached='top'>
            {this.state.wine.Producer}
            </Header>
            <Segment attached>
            {this.state.wine.Wine}
            </Segment>
            <Segment className='WWNotes' attached>
            {this.state.wine.WineWise_Notes}
            </Segment>
            <Button onClick={this.printDocument}>Download Tech Sheet</Button>
  </Grid.Column>

 </Grid.Row>

 <Grid.Row>

  <Grid.Column width={8}>
   <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan="2">{this.state.wine.Wine}</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {
            wineObjKeys.map(key => 
                    wine[key] !== '' && key !== 'WineWise_Notes' && key !== 'Just_In' && <Table.Row key={key}>
                        <Table.Cell>{this.removeUnderscores(key)}</Table.Cell>
                        <Table.Cell>{wine[key]}</Table.Cell>
                    </Table.Row>
            )
        }
    </Table.Body>
   </Table>
  </Grid.Column>
 </Grid.Row>
</Grid>
 
    );
  }
}

export default OneWine;
