import React, { Component } from 'react';
import PokemonsList from "../components/PokemonsList"

export default class Pokemons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            page: 1
        }
    }

    loadPokemons = () => {
        let {pokemons, page} = this.state;
        let url = `http://localhost:3000/pokemons?_page=${page}&_limit=20`;
        fetch(url)
            .then((response) => response.json())
            .then((newPokemons) => {
                this.setState({
                    pokemons:pokemons.concat(newPokemons),
                    page: page + 1
                })
            });
    }

    handleScroll = () => {
        let pageY = window.scrollY;
        let innerHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        console.log(pageY, innerHeight);
        if(pageY === innerHeight) {
            this.loadPokemons();
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.loadPokemons();
    }

    render() {
        let {pokemons} = this.state;
        return (
            <div>
                <PokemonsList pokemons={pokemons}/>
            </div>
        );
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}