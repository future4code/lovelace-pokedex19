export const goToPokedex = (history) => {
    history.push("/pokedex");
  };

export const goToHomePage = (history) => {
    history.push("/");
  };

export const goToPokemonDetailPage = (history, name) => {
    history.push(`/detalhes/${name}`);
  };
