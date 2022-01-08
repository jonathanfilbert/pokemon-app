import { IPokemon } from "pokeapi-typescript";
import { createContext } from "react";


export const PokemonContext = createContext({
  catchPokemon: (nickname:string, pokemon: IPokemon) => {},
  ownedPokemons: {},
})
