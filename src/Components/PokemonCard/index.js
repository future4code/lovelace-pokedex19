import React, { useContext, useState } from "react";
import GlobalContext from "../../global/GlobalContext";
import {
  PokeCardContainer,
  ImgContainer,
  PokeImg,
  ButtonsContainer
} from "./styled";

const ProductCard = (props) => {
  const { state, setters, requests } = useContext(GlobalContext);

  return (
    <PokeCardContainer>
      <ImgContainer>
        <PokeImg
          src={props.poke && props.poke.sprites.front_default}
          alt={props.poke.name}
        />
      </ImgContainer>
      <ButtonsContainer>
        <button onClick={props.isPokedex ? removeFromPokedex : addToPokedex}>
          {props.isPokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"}
        </button>
        <button
          onClick={() =>
            goToPokemonDetail(history, props.poke.name, props.isPokedex)
          }
        >
          Ver detalhes
        </button>
      </ButtonsContainer>
    </PokeCardContainer>
  );
};

export default ProductCard;
