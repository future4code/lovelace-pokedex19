import Header from '../../Components/Header/Header'
import React, { useContext } from 'react'   
// import GlobalContext from "../../hooks/GlobalContext"

 const ErrorPage = () => {
    // const { pokemons } = useContext(GlobalContext)
    // console.log(pokemons)
    return (
        <div>
            <Header />
            <h1>Error</h1>
        </div>
    )   
 }

 export default ErrorPage