import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useRequestData from "../../hooks/request";
import Header from "../../Components/Header/Header";
import { BASE_URL } from "../../constants/BASE_URL";

const PokemonDetailPage = () => {
  const params = useParams();
  const history = useHistory();

  const pokemon = useRequestData(
    `${BASE_URL}/${params.nome}`,
    {}
  );

  const goToListPage = () => {
    history.push("/");
  };

  return (
    <div>
      <Header />
      {pokemon.name && <h1>{pokemon.name}</h1>}
      {pokemon.sprites && pokemon.sprites.front_default && (
        <img src={pokemon.sprites.front_default} />
      )}
      <button onClick={goToListPage}>Voltar</button>
    </div>
  );
};

export default PokemonDetailPage;
