import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { PokemonContext } from "../src/pokemon/context";
import OwnedPokemonPage from "../pages/pokemon/owned";
import { MOCK_OWNED_POKEMON } from "./__mocks__";

// Mock owned Pokemon (2 Bulbasaurs)
// We're gonna pretend that these 2 Bulbasaurs have been captured
const mocks = MOCK_OWNED_POKEMON;

jest.mock("next/router", () => require("next-router-mock"));

jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />);

jest.mock("next/head", () => {
  return {
    __esModule: true,
    default: ({ children }) => {
      return <>{children}</>;
    },
  };
});

let mockProvider = {
  ownedPokemons: mocks,
  releasePokemon: (nickname, pokemon) => {
    let newOwnedPokemons = mocks;
    const targetId = newOwnedPokemons[pokemon.id].findIndex(
      (ownedItem) => ownedItem.nickname === nickname
    );
    newOwnedPokemons[pokemon.id].splice(targetId, 1);
    if (newOwnedPokemons[pokemon.id].length === 0) {
      delete newOwnedPokemons[pokemon.id];
    }
  },
  catchPokemon: () => {},
  isPokemonWithSameNicknameExist: (id: number, nickname: string): any => {},
  getAmountOwnedById: (id: number): any => {},
  getOwnedPokemonTotalAmount: (): any => {},
  canCatchPokemon: (): any => {},
};

test("renders owned pokemon page", async () => {
  render(
    <PokemonContext.Provider value={mockProvider}>
      <OwnedPokemonPage />
    </PokemonContext.Provider>
  );

  const numberOfOwnedPokemons = Object.values(mockProvider.ownedPokemons).flat()
    .length;
  await waitFor(() => {
    const pokemonNames = screen.queryAllByTestId("pokemon-name");
    expect(pokemonNames.length).toBe(numberOfOwnedPokemons);
  });
});

jest.setTimeout(30000);

test("renders and deletes pokemon", async () => {
  const { getAllByTestId } = render(
    <PokemonContext.Provider value={mockProvider}>
      <OwnedPokemonPage />
    </PokemonContext.Provider>
  );
  const numberOfOwnedPokemons = Object.values(mockProvider.ownedPokemons).flat()
    .length;
  const releaseButtons = await waitFor(() => getAllByTestId("release-button"));
  fireEvent.click(releaseButtons[0]);
  await new Promise((r) => setTimeout(r, 3000));
  await waitFor(() => {
    const pokemonNames = screen.queryAllByTestId("pokemon-name");
    expect(pokemonNames.length).toBe(numberOfOwnedPokemons);
  });
});

test("rerenders owned pokemon page", async () => {
  const { rerender } = render(
    <PokemonContext.Provider value={mockProvider}>
      <OwnedPokemonPage />
    </PokemonContext.Provider>
  );

  rerender(
    <PokemonContext.Provider value={mockProvider}>
      <OwnedPokemonPage />
    </PokemonContext.Provider>
  );

  const numberOfOwnedPokemons = Object.values(mockProvider.ownedPokemons).flat()
    .length;
  await waitFor(() => {
    const pokemonNames = screen.queryAllByTestId("pokemon-name");
    expect(pokemonNames.length).toBe(numberOfOwnedPokemons);
  });
});
