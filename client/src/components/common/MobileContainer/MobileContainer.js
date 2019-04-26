import React from "react";
import PropTypes from 'prop-types';
import { Container, Menu, Segment, Responsive, Sidebar, Icon, Button, Image, Header } from "semantic-ui-react";

import { Link } from 'react-router-dom';

class MobileContainer extends React.Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    const {pathname} = window.location;

    return (
    <Responsive
        as={Sidebar.Pushable}
        getWidth={this.props.getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
    >
      <Sidebar
          as={Menu}
          animation='push'
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
        <Header as='h3' style={{textAlign:'center', fontSize: "1.6em", paddingTop: "20px", color: '#510409'}}>WineWise</Header>
      
        <Link to="/"><Menu.Item onClick={this.handleSidebarHide} className={pathname === "/" ? "nav-link active" : "nav-link"}>
        <p ><i class="home icon"></i>Home</p></Menu.Item></Link>
        <Link to="/allwines"><Menu.Item onClick={this.handleSidebarHide} className={pathname === "/allwines" ? "nav-link active" : "nav-link"}>
          <p >All Wines</p></Menu.Item></Link>
        <Link to="/producers"><Menu.Item onClick={this.handleSidebarHide} className={pathname === "/producers" ? "nav-link active" : "nav-link"}>
          <p >Producers</p></Menu.Item></Link>
        <Link to="/aboutus" ><Menu.Item onClick={this.handleSidebarHide} className={pathname === "/aboutus" ? "nav-link active" : "nav-link"}>
          <p >About Us</p></Menu.Item></Link>
        <Link to="/admin" ><Menu.Item onClick={this.handleSidebarHide} className={pathname === "/admin" ? "nav-link active" : "nav-link"}>
          <p ><i class="dolly icon"></i> For the Trade</p></Menu.Item>
        </Link>
         
      </Sidebar>

        <Sidebar.Pusher 
        dimmed={sidebarOpened}
        textAlign='center'
        style={{ minHeight: 140, padding: '1em 0em' }}
        vertical
        >
            <Container >
              <Menu  pointing secondary size='huge'>
                <Menu.Item  onClick={this.handleToggle}>
                  <Icon name='bars' size='large'/>
                </Menu.Item>
                
                <Menu.Item position='right'>
                    <Image size='tiny' src='./images/owl.png' />
                </Menu.Item>
              </Menu>
            </Container>
        
          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

export default MobileContainer;