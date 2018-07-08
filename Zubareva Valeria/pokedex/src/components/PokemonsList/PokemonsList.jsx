import React, {Component} from "react";
import { Grid, Row } from "react-bootstrap";
import PokemonWithCatch from "../PokemonWithCatch";

export default class PokemonsList extends Component {
    render() {
        let {pokemons} = this.props;
        return (
            <Grid>
                <Row>
                    {pokemons.map((pokemon) => <PokemonWithCatch key={pokemon.id} pokemon={pokemon}/>)}
                </Row>
            </Grid>
        );
    }
}