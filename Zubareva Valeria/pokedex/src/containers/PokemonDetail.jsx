import React, {Component} from "react";
import PokemonPage from "../components/PokemonPage"

export default class PokemonDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: {
                id: 1,
                name: "default name"
            }
        }
    }

    getPokemon() {
        let {id}= this.props.match.params;
        fetch(`http://localhost:3000/pokemons/${id}`)
            .then((response) => response.json())
            .then((pokemon) => {
                this.setState({
                    pokemon: pokemon
                });
            })
    }
    componentDidMount() {
        this.getPokemon();
    }

    render() {
        let {pokemon} = this.state;
        return(
            <PokemonPage pokemon = {pokemon}/>
        )
    }
}