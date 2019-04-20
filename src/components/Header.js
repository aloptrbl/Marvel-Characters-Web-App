import React, {useState, useEffect} from 'react';
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
const Header = (heros) => {
  const [isOpen, setOpen] = useState('false');
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('r');

  useEffect( () => {
   toggle();
  }, [])
   
const toggle = async () => {
setOpen(!isOpen)
}

const updateSearch = e => {
  setSearch(e.target.value);
  console.log(search);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
}






    return (
        <Navbar className="fixed-top nav"  light expand="md">
     
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <NavbarBrand className="navbar-brand mr-auto" href="/">MARVEL</NavbarBrand>
          <Col md="4" className="mx-auto">
          <NavItem>
          <Col md="12">
          <Input className="searchbar form-control-lg" onSubmit={getSearch} type="text" name="text" value={search} onChange={updateSearch} placeholder="Search Heroes" />
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
    );

}

export default Header;