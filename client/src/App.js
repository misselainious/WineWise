import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Responsive } from "semantic-ui-react";
import Home from "./pages/home";
import AllWines from "./pages/allwines";
import Admin from "./pages/admin";
import Producers from "./pages/producers";
import AboutUs from "./pages/aboutus";

// import Onewine from "./pages/onewine";
// import Wrapper from "./components/Wrapper";

import DesktopContainer from "./components/common/DesktopContainer/DesktopContainer";
import MobileContainer from "./components/common/MobileContainer/MobileContainer";
import Footer from "./components/common/Footer/Footer";
import OneWine from "./pages/onewine";
import OneProducer from "./pages/oneproducer";



const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer getWidth={getWidth}>{children}</DesktopContainer>
    <MobileContainer getWidth={getWidth}>{children}</MobileContainer>
  </div>
)

class App extends Component {

  state = {
    wines: [],
  };

  render() {
    return (
        <Router>
          <ResponsiveContainer>
            <PageSwitch/>
            <Footer />
          </ResponsiveContainer>
        </Router>
    );
  }
}

const PageSwitch = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/allwines" component={AllWines} />
      <Route path="/admin" component={Admin} />
      <Route path="/details/:id" component={OneWine} />
      <Route path="/producers" component={Producers} />
      <Route path="/producerdetails/:id" component={OneProducer} />
      <Route path="/aboutus" component={AboutUs} />
    </Switch>
  )
}


export default App;