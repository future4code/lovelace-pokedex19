import React from 'react'
import { goToPokedex } from '../../route/Coordinator';
import {HeaderContainer, Button, LogoPokemon} from './Styled';
import { useHistory } from "react-router-dom";


const Header = () => {
    const history = useHistory();

    return (
        <HeaderContainer>
            <LogoPokemon src='https://bit.ly/388wq4W' alt='Pokemon-Logo' />  
            <h1>Lista de Pokemons</h1>
            <Button onClick={() => goToPokedex(history)}>Ir para Pokedex</Button>
        </HeaderContainer>
    )
}

export default Header;