import React, {Component} from "react";
import "./Menu.css"
import {Nav, Navbar, NavItem} from  "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class Menu extends Component {
    render() {
       return(
           <Navbar collapseOnSelect>
               <Navbar.Header>
                   <Navbar.Toggle />
               </Navbar.Header>
               <Navbar.Collapse>
                   <Nav>
                       <LinkContainer to="/main">
                           <NavItem>Pokedex</NavItem>
                       </LinkContainer>
                       <LinkContainer to ="/caught-pokemons">
                           <NavItem>Caught</NavItem>
                       </LinkContainer>
                   </Nav>
               </Navbar.Collapse>
           </Navbar>
       )
    }
}