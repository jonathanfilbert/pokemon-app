import { IPokemon } from "pokeapi-typescript";
import { useEffect, useState } from "react";
import { PokemonResponse } from "../containers/AllPokemonPage";
import { PokemonContext } from "../context";

export type OwnedPokemonType = {
  nickname: string;
  pokemon: PokemonResponse;
};

export const LOCAL_STORAGE_KEY = "TokopediaGottaCatchEmAll2022";

export const PokemonProvider = ({ children }) => {
  const [ownedPokemons, setOwnedPokemons] = useState<OwnedPokemonType>(Object);

  useEffect(() => {
    // if previous data exists
    if (localStorage.getItem(LOCAL_STORAGE_KEY) !== null) {
      const previousOwnedPokemons = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY)
      );
      setOwnedPokemons(previousOwnedPokemons);
    }
  }, []);

  const catchPokemon = (nickname: string, pokemon: IPokemon) => {
    let newOwnedPokemons = ownedPokemons;
    if (newOwnedPokemons[pokemon.id]) {
      newOwnedPokemons[pokemon.id].push({ nickname, pokemon });
    } else {
      newOwnedPokemons[pokemon.id] = [{ nickname, pokemon }];
    }
    setOwnedPokemons({ ...newOwnedPokemons });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newOwnedPokemons));
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
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newOwnedPokemons));
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

  const getAmountOwnedById = (id: number): number => {
    return id in ownedPokemons ? ownedPokemons[id].length : 0;
  };

  const getOwnedPokemonTotalAmount = (): number => {
    let total = 0;
    Object.keys(ownedPokemons).map((id) => {
      total += ownedPokemons[id].length;
    });
    return total;
  };

  return (
    <PokemonContext.Provider
      value={{
        catchPokemon,
        ownedPokemons,
        releasePokemon,
        isPokemonWithSameNicknameExist,
        getAmountOwnedById,
        getOwnedPokemonTotalAmount,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
