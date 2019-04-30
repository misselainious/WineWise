import _ from "lodash";
import React, { Component } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import API from '../../utils/API'
import { Link } from "react-router-dom"
import "./searchwines.css";


export default class SearchBar extends Component {

    state = {
        wines: []
    }

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, wines: [], value: "" });

    //What shows on the results bar when you click on it:
  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.Wine });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });
    API.getWines()
      .then(res => {
        this.setState({ wines: res.data }) 
      }
      )
      .catch(err => console.log(err));
    
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      //what is being tested for in search input
      const isMatch = result => re.test(result.Wine);

      this.setState({
        isLoading: false,
        wines: _.filter(this.state.wines, isMatch)
      });
    }, 300);
  };

  render() {
    
    const { isLoading, value, wines } = this.state;

    const resRender = ({ Wine, Producer, _id }) => (
      <Link to={"/details/" + _id}>
        <div key="name">
        {Wine}, {Producer}
        </div>
      </Link>
    );


    return (

          <Search className="search"
            placeholder="Search wines..."
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            results={wines}
            value={value}
            resultRenderer={resRender}
          />

    );
  }
}
