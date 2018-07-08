import React, {Component} from "react";
import "./PokemonWithCatch.css";
import { Col, Button } from "react-bootstrap";
import Pokemon from "../Pokemon";


export default class PokemonWithCatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            btnClicked: false
        }
    }
    catchPokemon = () => {
        let {pokemon} = this.props;
        fetch(`http://localhost:3000/caught-pokemons`,{
            method: "post",
            body: JSON.stringify({
                pokemonId : pokemon.id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        fetch(`http://localhost:3000/pokemons/${pokemon.id}`,{
            method: "put",
            body: JSON.stringify({
                name: pokemon.name,
                caught: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        this.setState({
            btnClicked: true
        })
    }

    render() {
        let {pokemon} = this.props;
        let {btnClicked} = this.state;
        return (
            <Col className="pokemon" xs={6} md={3} >
                <Pokemon pokemon={pokemon}/>
                <Button className={"caught-btn"} onClick={this.catchPokemon} disabled={ pokemon.caught || btnClicked}>
                    {pokemon.caught? "Caught" :"Catch"}
                </Button>
            </Col>
        );
    }
}