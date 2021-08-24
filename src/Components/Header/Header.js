import React from 'react'
import {HeaderContainer, Button, LogoPokemon} from './Styled';

const Header = () => {
    return (
        <HeaderContainer>
            <LogoPokemon src='https://bit.ly/388wq4W' alt='Pokemon-Logo' />  
            <h1>Lista de Pokemons</h1>
            <Button>Ir para Pokedex</Button>
        </HeaderContainer>
    )
}

export default Header;