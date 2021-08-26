import React from 'react'
import { useHistory } from 'react-router-dom'
// import { CardPokemon } from '../../Components/CardPokemon'
import Header from "../../Components/Header/Header"
import Footer from '../../Components/Footer/Footer'
import { BASE_URL } from '../../constants/BASE_URL'
import useRequestData from '../../hooks/request'
import { goToPokemonDetailPage } from "../../route/Coordinator"


const PokemonListPage = (props) => {
    const pokemonsList = useRequestData(`${BASE_URL}`, {});
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
        <Footer />
    </div>;
};

export default PokemonListPage;
