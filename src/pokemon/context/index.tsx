import { IPokemon } from "pokeapi-typescript";
import { createContext } from "react";
import { PokemonResponse } from "../containers/AllPokemonPage";

export const PokemonContext = createContext({
  catchPokemon: (nickname: string, pokemon: IPokemon) => {},
  ownedPokemons: {},
  releasePokemon: (nickname: string, pokemon: PokemonResponse) => {},
  isPokemonWithSameNicknameExist: (id: number, nickname: string): any => {},
  getAmountOwnedById: (id: number): any => {},
  getOwnedPokemonTotalAmount: (): any => {},
  canCatchPokemon: (): any => {},
});
