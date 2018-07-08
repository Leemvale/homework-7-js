import React, {Component} from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Pokemon from "../Pokemon";

export default class CaughtPokemonsList extends Component {
    render() {
        let {pokemons} = this.props;
        return (
            <Grid>
                <Row>
                    {pokemons.map((pokemon) => <Col xs={6} md={3} key={pokemon.id} ><Pokemon pokemon={pokemon}/></Col>)}
                </Row>
            </Grid>
        );
    }
}