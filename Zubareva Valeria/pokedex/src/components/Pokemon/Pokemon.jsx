import React, {Component} from "react";
import "./Pokemon.css";
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.caughtBtn = React.createRef();
    }
    catchPokemon = () => {
        let {pokemon} = this.props;
        console.log(pokemon);
        let {name, id} = pokemon;
        let url = `http://localhost:3000/caught-pokemons`;
        fetch(url,{
            method: "post",
            body: JSON.stringify({
                pokemonId : id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    render() {
        let {pokemon} = this.props;
        let {name, id} = pokemon;
        return (
            <Col className="pokemon" xs={6} md={3} >
                <Link to={`/pokemons/${id}`}>
                    <img className={"pokemon-img"} src={`https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${pokemon.id}.png`}/>
                    <p className={"pokemon-name"}>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
                </Link>
                <Button className={"caught-btn"} ref={this.caughtBtn} onClick={this.catchPokemon}>Catch</Button>
            </Col>
        );
    }
}