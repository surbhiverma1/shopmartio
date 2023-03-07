import React, { useState } from 'react';
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
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import shape from './shape.png'
import './TopBar.css'

function Top(args) {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="topBox" {...args}>
        <Nav className="ship"><img src={shape} alt="arrow"/>Free shipping on all orders over $99!</Nav>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            
            <NavItem>
              
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="language" nav caret>
                Language : English
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem>Hindi</DropdownItem>
                <DropdownItem>Urdu</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="currency" nav caret>
                Currency : USD
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem>Rupee</DropdownItem>
                <DropdownItem>Euro</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText className="myAcc">My Account</NavbarText>
          <NavbarText className="wish">Wishlist</NavbarText>
          <NavbarText className="signin">Register or Sign in</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Top;