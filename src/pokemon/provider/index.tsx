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
    console.log(newOwnedPokemons)
    setOwnedPokemons({...newOwnedPokemons})
  }

  const releasePokemon = (nickname:string, pokemon:PokemonResponse) => {
    let newOwnedPokemons = ownedPokemons
    console.log(pokemon)
    const targetId = newOwnedPokemons[pokemon.id].findIndex(ownedItem => ownedItem.nickname === nickname)
    newOwnedPokemons[pokemon.id].splice(targetId, 1);
    if (newOwnedPokemons[pokemon.id].length === 0){
      delete newOwnedPokemons[pokemon.id]
    }
    console.log(newOwnedPokemons)
    setOwnedPokemons({...newOwnedPokemons})
  }

  return(
    <PokemonContext.Provider value={
      {
        catchPokemon,
        ownedPokemons,
        releasePokemon
      }
    } >
      {children}
    </PokemonContext.Provider>
  )
}
