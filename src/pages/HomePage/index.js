import React from 'react'
import { useHistory } from 'react-router-dom'
// import { CardPokemon } from '../../Components/CardPokemon'
import Header from "../../Components/Header/Header"
import useRequestData from '../../hooks/request'
import { goToPokemonDetailPage } from "../../route/Coordinator"

const PokemonListPage = (props) => {
    const pokemonsList = useRequestData("https://pokeapi.co/api/v2/pokemon", {});
    const history = useHistory();

    const pokemonsComponents =
        pokemonsList.results &&
        pokemonsList.results.map((poke) => {
            return (
                <div>
                    <button onClick={() => goToPokemonDetailPage(history, poke.name)} key={poke.name}>
                        {poke.name}
                    </button>
                </div>
            );
        });

    return <div>
        <Header />
        <body>
            {pokemonsComponents}
        </body>
        <footer>
            <h1>footer</h1>
        </footer>

    </div>;
};

export default PokemonListPage;
