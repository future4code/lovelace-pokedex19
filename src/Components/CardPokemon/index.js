import React from "react"
import {CardContainer, TextContainer, ButtonDiv} from "./styled"

const CardPokemon = (props) => {
    return (
      <CardContainer>
        <img alt={props.pokemon.name} src={props.pokemon.sprite[0]} />

        <TextContainer>
          <NameText>{props.product.name}</NameText>
          <p>
            R${props.product.price} <b>x{props.product.quantity}</b>
          </p>
        </TextContainer>
        
       

        <ButtonDiv>
        <button onClick={() => props.removeFromCart(props.product)}>
          Remover
        </button>
        </ButtonDiv>
        </CardContainer>
    );
  };
  
  export default ProductItem;
  