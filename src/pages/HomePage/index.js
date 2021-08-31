import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
// import { CardPokemon } from '../../Components/CardPokemon'
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import GlobalContext from "../../hooks/GlobalContext"
import useRequestData from '../../hooks/request'
import { goToPokemonDetailPage } from "../../route/Coordinator"
import { PokeListContainer } from './styled'
import PokemonCard from "../../Components/PokemonCard"

const PokemonListPage = () => {
  const { pokemons } = useContext(GlobalContext)
  //console.log(pokemons)
  // const pokemonsList = useRequestData("https://pokeapi.co/api/v2/pokemon", {});
  // const history = useHistory();
  // console.log(pokemonsList)
  // const pokemonsComponents =
  //     pokemonsList.results &&
  //     pokemonsList.results.map((poke) => {
  //         return (
  //             <div>
  //                 <button onClick={() => goToPokemonDetailPage(history, poke.name)} key={poke.name}>
  //                     {poke.name}
  //                 </button>
  //             </div>
  //         );
  //     });
  const renderPokemonList = () => {
    if (!pokemons.data) {
      return <p>...carregando</p>
    }
  }

  return (
    <>
      <Header />
      <PokeListContainer>
        {renderPokemonList}
        {pokemons.map((poke) => {
          return <PokemonCard key={poke.name} pokemon={poke} />
        })}
      </PokeListContainer>
      <Footer />
    </>
  )
  // <div>
  //     <Header />
  //     <body>
  //         {pokemonsComponents}
  //     </body>
  //     <footer>
  //         <h1>footer</h1>
  //     </footer>

  // </div>
  // )};
}
export default PokemonListPage;