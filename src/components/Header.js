import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Input, Col, Row } from 'reactstrap';

  import './style.css';
export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="fixed-top nav"  light expand="md">
     
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <NavbarBrand className="navbar-brand mr-auto" href="/">MARVEL</NavbarBrand>
          <Col md="4" className="mx-auto">
          <NavItem>
          <Col md="12">
          <Input className="searchbar form-control-lg" type="email" name="email" id="exampleEmail" placeholder="Search Heroes" />
          </Col>
          </NavItem>
        </Col>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Characters</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Comics</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Events</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}