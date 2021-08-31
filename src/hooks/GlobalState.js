import React, { useState, useEffect } from 'react'
import axios from "axios"
import GlobalStateContext from './GlobalStateContext'
import { BASE_URL } from '../constants/urls'

const GlobalState = (props) => {
    const [pokemonNames, setPokemonNames] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useSTate([])

    useEffect(() => {
        getPokemonNames()
    }, [])
    const getPokemonNames = () => {
        axios.get(`${BASE_URL}/pokemon?limit=20`)
            .then((res) => {
                // console.log(res.data.result)
                setPokemonNames(res.data.results)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        const newList = []
        pokemonNames.forEach((element) => {
            axios.get(`${BASE_URL}/pokemon/${element.name}`)
                .then((res) => {
                    newList.push(res.data)
                    // console.log(newList)
                    if (newList.length === 20) {
                        const orderList = newList.sort((a, b) => {
                            return a.id - b.id
                        })
                        setPokemons(orderList)
                        console.log(orderList)
                    }
                })
                .catch((err) => {
                    console.log(err.message)
                })
        })
    }, [pokemonNames]);

    const data = { pokemons, setPokemons, pokedex, setPokedex }
    console.log(data)
    return (
        <GlobalStateContext.provider value={data}>
            {props.children}
        </GlobalStateContext.provider>
    )
}   

export default GlobalState