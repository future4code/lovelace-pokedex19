import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../../pages/HomePage/"
import PokedexPage from "../../pages/PokedexPage"
import PokemonDetailsPage from "../../pages/HomePage/";
import ErrorPage from "../../pages/ErrorPage"

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

                <Route exact path={"/pokemon/:id"}>
                    <PokemonDetailsPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}