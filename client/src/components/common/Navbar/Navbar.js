import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Menu, Search } from 'semantic-ui-react';

const Navbar = props => {
  const fixed = props.fixed;
  return (
   
    <Menu
      fixed={fixed ? 'top' : null}
      inverted={!fixed}
      pointing={!fixed}
      secondary={!fixed}
      size='large'
      color='red'
    >
      <Container>
        <Link to="/"><Menu.Item active>
          Home
        </Menu.Item></Link>
        <Link to="/allwines"><Menu.Item>All Wines</Menu.Item></Link>
        <Link to="/producers"><Menu.Item>Producers</Menu.Item></Link>
        <Link to="/aboutus"><Menu.Item>About Us</Menu.Item></Link>
        <Menu.Item position="center">
          <Search />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button as='a' inverted={!fixed}>
            Register
          </Button>
          <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
            Members
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default Navbar;