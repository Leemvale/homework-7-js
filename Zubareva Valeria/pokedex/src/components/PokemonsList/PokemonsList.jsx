import React, {Component} from "react";
import { Grid, Row } from "react-bootstrap";
import Pokemon from ".././Pokemon"

export default class PokemonsList extends Component {
    render() {
        let {pokemons} = this.props;
        return (
            <Grid>
                <Row>
                    {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
                </Row>
            </Grid>
        );
    }
}