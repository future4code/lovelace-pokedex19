import React from 'react'
import { goToHomePage, goToPokedex } from '../../route/Coordinator';
import { HeaderContainer, Button, LogoPokemon } from './Styled';
import { useHistory } from "react-router-dom";


const Header = () => {
    const history = useHistory();

    return (
        <HeaderContainer>
            <LogoPokemon src='https://bit.ly/388wq4W' alt='Pokemon-Logo' />
            <h1>Lista de Pokemons</h1>
            <div>
                <Button onClick={() => goToPokedex(history)}>Ir para Pokedex</Button>
                <Button onClick={() => goToHomePage(history)}>Ir para HomePage</Button>
            </div>
        </HeaderContainer>
    )
}

export default Header;