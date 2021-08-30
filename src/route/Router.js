import { Switch, Route, BrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage"
import HomePage from "../pages/HomePage"
import PokedexPage from "../pages/PokedexPage"
import PokemonDetailsPage from "../pages/PokemonDetailsPage";

export default function RouteManager() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>

                <Route exact path={"/pokedex"}>
                    <PokedexPage />
                </Route>

                <Route exact path={"/detalhes/:nome"}>
                    <PokemonDetailsPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}