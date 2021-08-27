import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import GlobalContext from "../../hooks/GlobalContext";
import { goToPokemonDetailPage } from "../../route/Coordinator"
import {
  PokeCardContainer,
  ImgContainer,
  PokeImg,
  ButtonsContainer
} from "./styled";

const PokemonCard = ({ pokemon, isPokedex }) => {
  const history = useHistory()
  const { pokemons, setPokemons, pokedex, setPokedex } = useContext(GlobalContext);

  const addToPokedex = () => {
    const pokeIndex = pokemons.findIndex((item) => item.name === pokemon.name)
    const newPokemonsList = [...pokemons]
    newPokemonsList.splice(pokeIndex, 1)
    const orderedPokemon = newPokemonsList.sort((a, b) => {
      return a.id - b.id
    })
    const newPokedexList = [...pokedex, pokemon]
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id
    })
    setPokedex(orderedPokedex)
    setPokemons(orderedPokemon)
  }

  const removeFromPokedex = () => {
    const pokeIndex = pokedex.findIndex((item) => item.name === pokemon.name)
    const newPokedexList = [...pokedex]
    newPokedexList.splice(pokeIndex, 1)
    const orderedPokedex = newPokedexList((a, b) => {
      return a.id - b.id
    })
    const newPokemonList = [...pokemons, pokemon]
    const orderedPokemon = newPokemonList((a, b ) => {
      return a.id - b.ids
    })

    setPokedex(orderedPokedex)
    setPokemons(orderedPokemon)
  }

  return (
    <PokeCardContainer>
      <ImgContainer>
        <PokeImg
          src={pokemon && pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </ImgContainer>
      <ButtonsContainer>
        <button onClick={isPokedex ? removeFromPokedex : addToPokedex}>
          {isPokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"}
        </button>
        <button
          onClick={() =>
            goToPokemonDetailPage(history, pokemon.name)
          }
        >
          Ver detalhes
        </button>
      </ButtonsContainer>
    </PokeCardContainer>
  );
};

export default PokemonCard;