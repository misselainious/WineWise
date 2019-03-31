import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Menu, Sticky} from 'semantic-ui-react';
import "./index.css";

const Navbar = props => {
  const fixed = props.fixed;
  const {pathname} = window.location;
  const scrollToTop = () => { window.scroll(0,0)};
  return (
  
    <Menu
      fixed={fixed ? 'top' : 'top'}
      // inverted={!fixed}
      // pointing={!fixed}
      // secondary={!fixed}
      size='small'
      style={{ padding: '1.5em 0em' }}
    >
      <Container className="navbarcustomstyle">
        <img src="../images/winewisehead.png" alt="owlhead" className="owlHeadLogo"/>
      <Link to="/" onClick={scrollToTop}><Menu.Item className={pathname === "/" ? "nav-link active" : "nav-link"}><p>WineWise</p></Menu.Item></Link>
        <Link to="/allwines" onClick={scrollToTop}><Menu.Item className={pathname === "/allwines" ? "nav-link active" : "nav-link"}><p>All Wines</p></Menu.Item></Link>
        <Link to="/producers" onClick={scrollToTop}><Menu.Item className={pathname === "/producers" ? "nav-link active" : "nav-link"}><p>Producers</p></Menu.Item></Link>
        <Link to="/aboutus" onClick={scrollToTop}><Menu.Item className={pathname === "/aboutus" ? "nav-link active" : "nav-link"}><p>About Us</p></Menu.Item></Link>
        <Menu.Item position='right'>
          <Button className="registerBtn"  style={{ padding: '5px', marginLeft: '0.2em', fontSize: '10px' }}>
            <p className="registerBtnText">For The Trade</p>
          </Button>
        </Menu.Item>
      </Container>
    </Menu>

  )
}

export default Navbar;
