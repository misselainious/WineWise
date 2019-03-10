import _ from "lodash";
import faker from "faker";
import React, { Component } from "react";
import API from "../../utils/API"
import { Search, Grid, Header, Segment } from "semantic-ui-react";




// const source = _.times(5, () => ({

//   title: faker.company.companyName(),
//   description: faker.company.catchPhrase(),
//   image: faker.internet.avatar(),
//   price: faker.finance.amount(0, 100, 2, "$")
// }));

export default class SearchExampleStandard extends Component {

    state = {
        wines: []
      };

  componentWillMount() {
    API.getWines()
    .then(res => {
      console.log("Wines: ", res)
      this.setState({ wines: res.data })
    }
    )
    .catch(err => console.log(err));
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(this.state.wines.Code);

      this.setState({
        isLoading: false,
        results: _.filter(this.state.wines, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    );
  }
}
