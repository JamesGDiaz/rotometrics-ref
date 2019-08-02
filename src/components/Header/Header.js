import React, { Component } from "react";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navExpanded: false,
      email: null
    };
  }

  componentWillMount() {
    this.setState({ navExpanded: false });
  }

  setNavExpanded = expanded => {
    this.setState({ navExpanded: expanded });
  };

  closeNav = () => {
    this.setState({ navExpanded: false });
  };

  render() {
    return (
      <div className="navbarContainer">
        <Navbar
          bg="light"
          expand="lg"
          className="navbar"
          collapseOnSelect={true}
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <LinkContainer to="/">
            <Navbar.Brand className="navbarBrand">
              <img
                alt="Rotometrics"
                src={require("../../assets/rotometrics-logo.png")}
                width="250"
                height="57"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </LinkContainer>

          {
            <Navbar.Collapse
              id="responsive-navbar-nav"
              onSelect={this.closeNav}
            >
              {
                <Nav className="mr-auto">
                  <LinkContainer to="/new">
                    <Nav.Link>New File</Nav.Link>
                  </LinkContainer>
                </Nav>
              }
            </Navbar.Collapse>
          }
        </Navbar>
      </div>
    );
  }
}

export default Header;
