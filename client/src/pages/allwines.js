import React, { Component } from "react";
// import Container from "../components/Container";
import CheckboxSidebar from "../components/CheckboxSidebar/CheckboxSidebar";
import API from "../utils/API";
import { List } from "../components/List";
import { DataWine } from "../components/DataWineTable";
// import { Link } from "react-router-dom";
import { Grid, Responsive } from "semantic-ui-react";
import Winecard from "../components/WineCard"
import SearchWines from "../components/SearchWines"

class Wines extends Component {
  state = {
    wines: [],
    producerNames: [],
    regionNames: [],
    isLoading: false,

    filters: {
      countries: [],
      colors: [],
      regions: [],
      producers: [],
      farming: [],
      female: []
    },
    visable: false
  };
  //onload we get all the wine and producer data


  componentDidMount() {
    
    this.loadWines();
    this.loadProducers();
  }
  loadWines = () => {
    this.setState({
      isLoading: true
    })
    API.getWines()
      .then(res => {
        this.setState({ wines: res.data })
        let regionNames = []
        res.data.map(wine => {
          if (!regionNames.includes(wine.Region)) {
            regionNames.push(wine.Region)
          }
        })
        this.setState({ regionNames })
      }
      )
      .catch(err => console.log(err));
  };
  loadProducers = () => {
    API.getProducers()
      .then(res => {
        let producerNames = [];
        res.data.map(producer => {
          producerNames.push(producer.Producer)
        })
        this.setState({ producerNames })

      }
      )
      .catch(err => console.log(err));
  };

  handleFilterChange = event => {
    // console.log('event.target', event.target);
    if (event.target.checked) {
      //define the selected filter
      const selectedFilter = event.target.getAttribute("data-filter");
      const filterArray = this.state.filters[selectedFilter];
      filterArray.push(event.target.value);
      //the bug seems to come from set state, we're accidentally getting rid of all the other arrays
      //we will need to use the previous state
      let oldFilters = this.state.filters
      oldFilters[selectedFilter] = filterArray
      this.setState({
        filters: oldFilters
      })
    } else {
      const filterArray = this.state.filters[event.target.getAttribute("data-Filter")].filter(elem => elem !== event.target.value);
      this.setState({
        filters: {
          ...this.state.filters,
          [event.target.getAttribute("data-Filter")]: filterArray
        }
      })
    }
  }

  render() {
    const mainStyle = { marginLeft: "250px" }
    const countries = ["Germany", "France", "Austria", "Spain", "Portugal", "Greece"]
    const colors = ["Rosé", "White", "Red", "Sparkling", "Dessert"]
    const female = ["Female Winemaker"]
    const regions = this.state.regionNames;
    const producers = this.state.producerNames;
    const farming = ["Sustainable", "Organic", "Certified Organic", "Bio-dynamic", "Certified Bio-dynamic"];
    const { visable } = this.state;
    //
    const filterElements = [{
      filterType: "countries",
      elements: countries
    }, {
      filterType: "colors",
      elements: colors
    }, {
      filterType: "regions",
      elements: regions
    }, {
      filterType: "producers",
      elements: producers
    }, {
      filterType: "farming",
      elements: farming
    }, {
      filterType: "female",
      elements: female
    }]
    //TODO Make the footer less wonky
    let wineList = this.state.wines
    // console.log("preWinelist", wineList)
    //this is a hacky way to access the wine data field given that each word is
    //slightly different than the actual keyword
    const wineFieldAdjuster = { "countries": "Country", "regions": "Region", "producers": "Producer", "colors": "Color", "farming": "Farming_practices", "female": "Female_Winemaker" }
    // filter by each keyword if the filter is selected
    for (let keyword of ["producers", "countries", "colors", "regions", "farming", "female"]) {
      wineList = wineList.filter(wine => {
        return (
          (this.state.filters[keyword].length === 0) ||
          this.state.filters[keyword].includes(wine[wineFieldAdjuster[keyword]])
        )
      })
    }

    return (
      <Grid style={{marginTop: '30px'}} columns={2}>
        <Grid.Column width={3} style={{marginTop: '40px'}}>
        <SearchWines />
        <CheckboxSidebar checkableArrays={filterElements} handleFilterChange={this.handleFilterChange} />
        </Grid.Column>
   <Grid.Column width={12}>
      <Grid centered style={{marginTop: '80px'}}>
        
        {wineList.length ? (
           <Grid.Row >
       
                
                 
                    {wineList.map(wine => (
                      <Winecard header={wine.Wine} region={wine.Region} producer={wine.Producer} country={wine.Country} wineid={wine._id} key={wine._id} url={wine.URL} Code={wine.Code} />
                    ))}
                  
              
                </Grid.Row>
            ) : (
                <h3>{this.state.isLoading ? "loading..." : "No results to display"}</h3>
              )}

      </Grid>
      </Grid.Column>
      </Grid>

  )
            }
            }
export default Wines;
