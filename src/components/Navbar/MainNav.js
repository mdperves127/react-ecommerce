import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';
import './MainNav.css';

const MainNav = () => {
    return(
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand>
                <Link to="/">
                  <img src={Logo} alt={Logo} />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="m-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                  <ul className="navItems">
                    <li>
                      <Link className="active" to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
              </Nav>
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                <ul className="navIcons">
                  <li>
                    <Link to=""><i className="fa fa-heart"><span>4</span></i></Link>
                  </li>
                  <li>
                    <Link to=""><i className="fa fa-shopping-bag"><span>3</span></i></Link>
                  </li>
                  <li>
                    <Link to=""><i className="fa fa-search"></i></Link>
                  </li>
                  <li>
                    <Link to=""><i className="fa fa-bars"></i></Link>
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}





export default MainNav;