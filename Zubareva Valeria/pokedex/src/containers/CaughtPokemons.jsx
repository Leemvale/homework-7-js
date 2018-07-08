import React, { Component } from 'react';
import PokemonsList from "../components/PokemonsList"
import Pokemons from "./Pokemons.jsx"

export default class CaughtPokemons extends Pokemons {
    loadPokemons = () => {
        let {pokemons, page} = this.state;
        let url = `http://localhost:3000/caught-pokemons?_expand=pokemon`;
        fetch(url)
            .then((response) => response.json())
            .then((newPokemons) => {
                this.setState({
                    pokemons: pokemons.concat(newPokemons.map((item) => item.pokemon)),
                    page: page + 1
                })
            });
    }
}