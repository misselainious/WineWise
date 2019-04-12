import React from 'react'
import {
  Container,
  Dropdown,
  Image,
  Menu,
} from 'semantic-ui-react'

import { Link } from 'react-router-dom';

const scrollToTop = () => { window.scroll(0,0)};

const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top'>
      <Container>
      <Link to="/" onClick={scrollToTop}>
        <Menu.Item as='a' header>
          <Image size='mini' src='./images/owl.png' style={{ marginRight: '1.5em' }} />
          WineWise
        </Menu.Item>
        </Link>
        

      
        <Dropdown item simple text='Countries'>
          <Dropdown.Menu>
            <Dropdown.Item>Austria</Dropdown.Item>
            <Dropdown.Item>France</Dropdown.Item>
            <Dropdown.Item>Germany</Dropdown.Item>
            <Dropdown.Item>Greece</Dropdown.Item>
            <Dropdown.Item>Portugal</Dropdown.Item>
            <Dropdown.Item>Spain</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>France</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item ><Link to="/producers" onClick={scrollToTop}>All Producers  </Link></Menu.Item>
        <Menu.Item ><Link to="/allwines" onClick={scrollToTop}>All Wines  </Link></Menu.Item>
        <Menu.Item ><Link to="/aboutus" onClick={scrollToTop}>About Us  </Link></Menu.Item>


      </Container>
    </Menu>

  </div>
)

export default FixedMenuLayout