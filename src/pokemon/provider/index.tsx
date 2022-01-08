import { IPokemon } from "pokeapi-typescript";
import { useState } from "react";
import { PokemonResponse } from "../containers/AllPokemonPage";
import { PokemonContext } from "../context";

export type OwnedPokemonType = {
  nickname:string,
  pokemon: PokemonResponse
}

export const PokemonProvider = ({children}) => {
  const [ownedPokemons, setOwnedPokemons] = useState<OwnedPokemonType>(Object)

  const catchPokemon = (nickname:string, pokemon:IPokemon) => {
    let newOwnedPokemons = ownedPokemons
    if (newOwnedPokemons[pokemon.id]) {
      newOwnedPokemons[pokemon.id].push({nickname, pokemon})
    }
    else {
      newOwnedPokemons[pokemon.id] = [{nickname, pokemon}]
    }
    setOwnedPokemons({...newOwnedPokemons})
  }

  return(
    <PokemonContext.Provider value={
      {
        catchPokemon,
        ownedPokemons
      }
    } >
      {children}
    </PokemonContext.Provider>
  )
}
