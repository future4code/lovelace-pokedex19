import React, { useEffect } from 'react'
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
        axios.het(`${BASE_URL}`)
        .get((res) => {
            setPokemonNames(res.data.results)
        })
        .catch((err) => {
            console.log(error.message)
        })
    }

    useEffect(() => {
        const newList = []
        pokemonNames.forEach((element) => {
            axios.get(element.url)
            .then((res) => {
                newList.push(res.data)
                if(newList.length === 20){
                    const orderList = newList.sort((a,b) => {
                        return a.id - b.id
                    })
                    setPokemons(orderList)
                }
                })
                .catch((err) => {
                    console.log(err.message)
                })
            })
        }, [pokemonNames]);

        const data = { pokemons, setPokemons, pokedex, setPokedex }

        return (
        <GlobalStateContext.provider value={data}>
            {props.children}
        </GlobalStateContext.provider>
    })
}

export default GlobalState