export const goToHomePage = (history) => {
    history.push("/");
  };
  
  export const goToPokedex = (history) => {
    history.push("/pokedex");
  };
  
  export const goToPokemonDetailPage = (history) => {
    history.push(`/pokemon/:id`);
  };