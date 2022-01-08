import { IPokemon } from "pokeapi-typescript";
import { useState } from "react";
import { PokemonContext } from "../context";

export const PokemonProvider = ({children}) => {
  const [ownedPokemons, setOwnedPokemons] = useState({})

  const catchPokemon = (pokemon:IPokemon) => {
    const generatedNumber = Math.random()
    if(generatedNumber < 0.5) {
      alert(`${pokemon.name} is caught!`)
    }
    else{
      alert("Not caught!")
    }
  }


  return(
    <PokemonContext.Provider value={
      {
        catchPokemon
      }
    } >
      {children}
    </PokemonContext.Provider>
  )
}
