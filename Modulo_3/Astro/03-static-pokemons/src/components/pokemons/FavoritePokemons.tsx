import { For, createSignal } from "solid-js"
import type { FavoritePokemons } from "../../interfaces/favorite-pokemons"
import { FavoritePokemonsCard } from "./FavoritePokemonCard"

const getLocalStoragePokemons = (): FavoritePokemons[] => {
    const favoritePokemos = JSON.parse(
        localStorage.getItem('favorites') ?? '[]'
    )
    return favoritePokemos
}



export const FavoritePokemos = () => {
    const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
    <For each={ pokemons() }>
                {
                    (pokemon) => (
                        <FavoritePokemonsCard pokemon={ pokemon } />
                    )
                }
            </For>
    </div>
);
};