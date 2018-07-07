import React, {Component} from "react";
import "./Pokemon.css"
import { Col } from "react-bootstrap";


export default class Pokemon extends Component {
    render() {
        let {pokemon} = this.props;
        let {name, id} = pokemon;
        return (
            <Col className="pokemon" sm={6} md={4} lg={3}  >
                <img className={"pokemon-img"} src={`https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${pokemon.id}.png`}/>
                <p className={"pokemon-name"}>{pokemon.name}</p>
            </Col>
        );
    }
}