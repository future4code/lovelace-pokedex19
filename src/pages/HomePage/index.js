import React, { useContext } from 'react'
import { Header } from '../../Components/Header/'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { PokeListContainer } from './styled'
import GlobalStateContext from '../../hooks/GlobalContext'
import { goToPokedex } from '../../route/Coordinator'
import { useHistory } from 'react-router-dom'



const PokemonListScreen = () => {
    const { pokemons } = useContext(GlobalStateContext) //Está recebendo o estado pokemons(que contém a list de pokemons) através do useContext
    
    const history = useHistory()
    
    
    return (
        <>
          <Header />
          <PokeListContainer>
             {pokemons.map((poke) => { // Está mapeando a lista de pokemons que está no estado e retornado cada um no poke
               //Precisa da key porque estamos retornando uma lista
                return <PokemonCard key={poke.name} pokemon={poke}/> // Estamos passando por prop para dentro do PokemonCard as infomações dos pokémons(pokemon={poke})
             })}
          </PokeListContainer>
        </>

    )
}
export default PokemonListScreen