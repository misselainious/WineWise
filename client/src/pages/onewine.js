import React, { Component } from "react";
import API from "../utils/API";
import { Grid, Table, Segment, Image, Header, Responsive} from "semantic-ui-react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Winecard from '../components/WineCard'
import { Link } from "react-router-dom";
import {Moon, Female, Leaf, Sun} from '../components/Labels/Labels'

class OneWine extends Component {
  state = {
    wine: {},
    wines: [],
    open: false
  };


  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleHover = () => {
    console.log("hover yo")
  }

  removeUnderscores(myString){
    return myString.split("_").join(" ")
  }
  componentDidMount() {

    window.scrollTo(0,0);
    API.getWine(this.props.match.params.id)
      .then(res => this.setState({ wine: res.data }))
      .then(
        API.getWines()
        .then(res => {
          let data = res.data
          data = data.filter((item) => item.Producer === this.state.wine.Producer)
          data = data.filter((item) => item.Code !== this.state.wine.Code)
          this.setState({ wines: data })
        }))
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
        pdf.save("WineWise.pdf");
      })
    ;
  }

render() {
  // const { open } = this.state
    const { wine } = this.state;
    delete wine._id
    const wineObjKeys = Object.keys(wine).filter(key => key!=='URL');
    let producerWines = this.state.wines
    const farming = this.state.wine.Farming_practices;

    return (
      <div id="divToPrint">

      {/* Mobile */}
<Responsive maxWidth={767}>
<Grid centered>

<Grid.Row style={{marginTop:'25px'}}>
  <Grid.Column width={15}>
<Link to={"/producerdetails/" + this.state.wine.Producer}>
            <Header onMouseOver={this.handleHover} style={{backgroundColor:'#dfdfbf'}} as='h2' attached='top'>
            {this.state.wine.Producer}
            </Header>
          </Link>
            <Segment attached>
            {this.state.wine.Wine}
            </Segment>

            { (this.state.wine.WineWise_Notes === "")? null
            :
  
            <Segment className='WWNotes' attached>
            {this.state.wine.WineWise_Notes}
            </Segment>
            }
            </Grid.Column>
</Grid.Row>

  <Grid.Row style={{margin: '20px'}}>
  <Image >
            { (this.state.wine.URL === "") ?<Image src='/images/StockRED.png'/>
            :
            // Else Renders specific wine image from url:
              // <Image src={`https://gdurl.com${this.state.wine.URL}`} />

              // For when image is in individual folder:
              <Image src={`/images/bottle/${this.state.wine.Code}.png`}/>
            } 
  </Image>

{/* CORNER LABELS */}
{/* If the wine is Organic, puts a green leaf label */}
  { ((farming === "Organic") || (farming === "Certified Organic" )) && <Leaf />}

{/* If the wine is Bio-dynamic, puts a blue moon label */}
  { ((farming === "Bio-dynamic") || (farming === "Certified Bio-dynamic" )) && <Moon />}

{/* If the wine is HEV, puts a yellow Sun label */}
  { farming === "HEV" && <Sun />}

{/* If the winemaker is female, puts a pink female label */}
  { this.state.wine.Female_Winemaker === "Female Winemaker"  && <Female />}

  </Grid.Row>


  <Grid.Row>
    <Grid.Column width={14}>
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

  {(this.state.wines.length === 0)? <div></div>:

<Grid.Row>
<Grid.Column width={12}>
<Header as='h3'>{this.state.wine.Producer}'s Other Wines</Header>
      
       <Grid.Row>
         
         <Grid.Column width={8}>
                  
               <Grid >
                 <Grid.Row columns={12}>
                   {producerWines.map(wine => (
    <Winecard header={wine.Wine} region={wine.Region} producer={wine.Producer} country={wine.Country} wineid={wine._id} key={wine._id} url={wine.URL} Code={wine.Code}/>
                   ))}
                 </Grid.Row>
               </Grid>

         </Grid.Column>
       </Grid.Row>
       </Grid.Column>
       </Grid.Row>
}

</Grid>
</Responsive>

{/* Desktop */}
<Responsive minWidth={768}>
<Grid style={{marginTop: '100px', marginLeft:'20px', marginBottom: '20px'}} >

 <Grid.Row>

  <Grid.Column width={3}>
{/* Renders Photo of wine */}
  <Image >
            { (this.state.wine.URL === "") ?<Image src='/images/StockRED.png'/>
            :
            // Else Renders specific wine image from url:
              <Image src={`https://gdurl.com${this.state.wine.URL}`} />

              //For when image is in individual folder:
              // <Image src={`/images/individual/${this.state.wine.Code}.png`}/>
            } 
  </Image>

{/* CORNER LABELS */}
{/* If the wine is Organic, puts a green leaf label */}
  { ((farming === "Organic") || (farming === "Certified Organic" )) && <Leaf />}

{/* If the wine is Bio-dynamic, puts a blue moon label */}
  { ((farming === "Bio-dynamic") || (farming === "Certified Bio-dynamic" )) && <Moon />}

{/* If the wine is HEV, puts a yellow Sun label */}
  { farming === "HEV" && <Sun />}

{/* If the winemaker is female, puts a pink female label */}
  { this.state.wine.Female_Winemaker === "Female Winemaker"  && <Female />}
  
      
  </Grid.Column>

  <Grid.Column width={6}>
          <Link to={"/producerdetails/" + this.state.wine.Producer}>
            <Header style={{backgroundColor:'#dfdfbf'}} as='h2' attached='top'>
            {this.state.wine.Producer}
            </Header>
          </Link>
            <Segment attached>
            {this.state.wine.Wine}
            </Segment>
            { (this.state.wine.WineWise_Notes === "")? null
            :
  
            <Segment className='WWNotes' attached>
            {this.state.wine.WineWise_Notes}
            </Segment>
            }
            {/* <Button onClick={this.printDocument && this.handleOnClick}>Download Tech Sheet</Button> */}
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


{/* Producer's Other Wines */}
{(this.state.wines.length === 0)? <div></div>:

 <Grid.Row>
 <Grid.Column width={12}>
<Header as='h3'>{this.state.wine.Producer}'s Other Wines</Header>
       
        <Grid.Row>  

          <Grid.Column width={8}>
  
                <Grid >
                  <Grid.Row columns={12}>
                    {producerWines.map(wine => (
     <Winecard header={wine.Wine} justIn={wine.Just_In} region={wine.Region} producer={wine.Producer} country={wine.Country} wineid={wine._id} key={wine._id} url={wine.URL} Code={wine.Code} />
                    ))}
                  </Grid.Row>
                </Grid>

          </Grid.Column>
        </Grid.Row>
        </Grid.Column>
        </Grid.Row>
}

</Grid>
</Responsive>
</div>
 
    );
  }
}

export default OneWine;
