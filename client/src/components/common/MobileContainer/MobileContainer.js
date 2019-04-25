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
          <Menu.Item as='a' active>
            {/* Wine Wise */}
          </Menu.Item>
          <Link to="/"><Menu.Item className={pathname === "/" ? "nav-link active" : "nav-link"}>
            <p className="sideBarText">Wine Wise</p></Menu.Item></Link>
            <Link to="/allwines"><Menu.Item className={pathname === "/allwines" ? "nav-link active" : "nav-link"}>
              <p className="sideBarText">All Wines</p></Menu.Item></Link>
            <Link to="/producers"><Menu.Item className={pathname === "/producers" ? "nav-link active" : "nav-link"}>
              <p className="sideBarText">Producers</p></Menu.Item></Link>
            <Link to="/aboutus" ><Menu.Item className={pathname === "/aboutus" ? "nav-link active" : "nav-link"}>
              <p className="sideBarText">About Us</p></Menu.Item></Link>
            <Link to="/admin" ><Menu.Item className={pathname === "/admin" ? "nav-link active" : "nav-link"}>
              <p className="sideBarText"><i class="dolly icon"></i> For the Trade</p></Menu.Item>
  
        
      
          </Link>
         
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            
            textAlign='center'
            style={{ minHeight: 140, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu  pointing secondary size='large'>
                <Menu.Item inverted onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                
                <Menu.Item inverted position='right'>
                    {/* <Button className="registerBtn"  style={{ marginLeft: '0.5em' }}>
                        <p className="registerBtnText">For The Trade</p>
                    </Button> */}
                    <Image size='tiny' src='./images/winewisehead.png' />
                </Menu.Item>
              </Menu>
            </Container>
          
          </Segment>

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