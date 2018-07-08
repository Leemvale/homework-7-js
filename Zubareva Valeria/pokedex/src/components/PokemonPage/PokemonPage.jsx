import React, {Component} from "react";
import { Grid, Row, Col } from "react-bootstrap"

export default class PokemonPage extends Component {
    render() {
        let {pokemon}= this.props;
        let {id, name} = pokemon;
        return(
            <Grid>
                <Row>
                    <Col md={5}>
                        <img className={"pokemon-profile-img"} src={`https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${id}.png`}/>
                    </Col>
                    <Col md={7}>
                        <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
                    </Col>
                </Row>
            </Grid>
        )
    }
}