import { IPokemon } from "pokeapi-typescript";
import { useState } from "react";
import { PokemonResponse } from "../containers/AllPokemonPage";
import { PokemonContext } from "../context";

export type OwnedPokemonType = {
  nickname: string;
  pokemon: PokemonResponse;
};

export const PokemonProvider = ({ children }) => {
  const [ownedPokemons, setOwnedPokemons] = useState<OwnedPokemonType>(Object);

  const catchPokemon = (nickname: string, pokemon: IPokemon) => {
    let newOwnedPokemons = ownedPokemons;
    if (newOwnedPokemons[pokemon.id]) {
      newOwnedPokemons[pokemon.id].push({ nickname, pokemon });
    } else {
      newOwnedPokemons[pokemon.id] = [{ nickname, pokemon }];
    }
    setOwnedPokemons({ ...newOwnedPokemons });
  };

  const releasePokemon = (nickname: string, pokemon: PokemonResponse) => {
    let newOwnedPokemons = ownedPokemons;
    const targetId = newOwnedPokemons[pokemon.id].findIndex(
      (ownedItem) => ownedItem.nickname === nickname
    );
    newOwnedPokemons[pokemon.id].splice(targetId, 1);
    if (newOwnedPokemons[pokemon.id].length === 0) {
      delete newOwnedPokemons[pokemon.id];
    }
    setOwnedPokemons({ ...newOwnedPokemons });
  };

  const isPokemonWithSameNicknameExist = (
    id: number,
    nickname: string
  ): boolean => {
    let isExist = false;
    if (!(id in ownedPokemons)) {
      isExist = false;
    } else {
      ownedPokemons[id].forEach((ownedPokemon) => {
        if (ownedPokemon.nickname === nickname) {
          isExist = true;
        }
      });
    }
    return isExist;
  };

  return (
    <PokemonContext.Provider
      value={{
        catchPokemon,
        ownedPokemons,
        releasePokemon,
        isPokemonWithSameNicknameExist,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
