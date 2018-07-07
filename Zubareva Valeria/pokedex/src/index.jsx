import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pokemons from "./containers/Pokemons.jsx";
import {Nav, Navbar, NavItem} from  "react-bootstrap";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">
                                Main Page
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                Caught
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Pokemons />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));