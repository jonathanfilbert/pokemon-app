import { IPokemon } from "pokeapi-typescript";
import { useEffect, useState } from "react";
import { PokemonResponse } from "../containers/AllPokemonPage";
import { PokemonContext } from "../context";

export type OwnedPokemonType = {
  nickname: string;
  pokemon: PokemonResponse;
};

// Local Storage Key
export const LOCAL_STORAGE_KEY = "TokopediaGottaCatchEmAll2022";

export /**
 * Pokemon Provider to wrap the app
 *
 * @param children - child components to access the provider
 * @return {*}
 */
const PokemonProvider = ({ children }) => {
  const [ownedPokemons, setOwnedPokemons] = useState<OwnedPokemonType>(Object);

  /**
   * useEffect to run on mount to check if local storage is null or not.
   * If its not null (has something inside), then load them to context
   */
  useEffect(() => {
    // if previous data exists
    if (localStorage.getItem(LOCAL_STORAGE_KEY) !== null) {
      const previousOwnedPokemons = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY)
      );
      setOwnedPokemons(previousOwnedPokemons);
    }
  }, []);

  /**
   * Function to catch pokemon.
   * The structure of the captured Pokemon array is:
   * {
   * id: [Pokemon, Pokemon],
   * }
   * Check if the id exists, if it does, then append.
   * If id does not exist, create a key with value of a single array containing the pokemon
   *
   * @param {string} nickname - nickname of the pokemon
   * @param {IPokemon} pokemon - Pokemon Object
   */
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

  /**
   * Function to release the captured Pokemon from context.
   * First is to find the index of that particular pokemon from the context.
   * Then to splice the array at that particular index, removing the pokemon.
   * If after splicing the array is empty, delete that particular key (no more Pokemon)
   * Finally, return the modified array replacing the one in context.
   *
   * @param {string} nickname - nickname of the pokemon
   * @param {PokemonResponse} pokemon - Pokemon object
   */
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

  /**
   * Check if 2 pokemon with the same id, have the same nickname
   * First is to check if the id exists, if not then return false.
   * Then is to loop through the pokemon with the same id, checking the nickname
   * If found, then return true.
   *
   * @param {number} id - id of pokemon
   * @param {string} nickname - nickname of pokemon
   * @return returns the boolean value whether exist or not
   */
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

  /**
   * Get the amount of Pokemon owned by its id.
   * Simply check the length of the array of the particular id.
   * If id not exist, then return 0 (means not owned)
   *
   * @param {number} id - id of the pokemon
   * @return returns the amount of pokemon owned based on an id.
   */
  const getAmountOwnedById = (id: number): number => {
    return id in ownedPokemons ? ownedPokemons[id].length : 0;
  };

  /**
   * Get the total amount of owned Pokemon
   * Loops through every array of owned Pokemon and adding its length.
   *
   * @return the total of all owned pokemon.
   */
  const getOwnedPokemonTotalAmount = (): number => {
    let total = 0;
    Object.keys(ownedPokemons).map((id) => {
      total += ownedPokemons[id].length;
    });
    return total;
  };

  /**
   * Generate a random number from 0 to 1 and returns true if the value is less than 0.5 (50:50 probability)
   * cr: https://stackoverflow.com/a/44651588
   *
   * @return whether that pokemon can be caught or not.
   */
  const canCatchPokemon = (): boolean => {
    return Math.random() < 0.5;
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
        canCatchPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
