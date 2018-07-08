import Pokemons from "./containers/Pokemons.jsx";
import CaughtPokemons from "./containers/CaughtPokemons.jsx"

const routes = [
    {
        path:"/",
        component: Pokemons,
        exact: true
    },
    {
        path:"/caught-pokemons",
        component: CaughtPokemons,
        exact: true
    },
    {
        path:"/main",
        component: Pokemons,
        exact: true
    },
];

export default routes