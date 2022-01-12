import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { GET_POKEMON } from "../src/shared/apollo/queries";
import { MockedProvider } from "@apollo/client/testing";
import PokemonDetailPage from "../pages/pokemon/[name]";
import { MOCK_POKEMON_DETAIL } from "./__mocks__";
import { PokemonContext } from "../src/pokemon/context";
import { ChakraProvider } from "@chakra-ui/react";

const mocks: any = [
  {
    request: {
      query: GET_POKEMON,
      variables: {
        name: "bulbasaur",
      },
    },
    result: {
      data: {
        pokemon: MOCK_POKEMON_DETAIL,
      },
    },
  },
];

test("renders pokemon types", async () => {
  const { getAllByTestId } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <PokemonDetailPage pokemon={MOCK_POKEMON_DETAIL} />
    </MockedProvider>
  );
  const typeButton = await waitFor(() => getAllByTestId("type-button"));
  const pokemonTypes = await waitFor(() => getAllByTestId("type-chip"));
  fireEvent.click(typeButton[0]);
  await waitFor(() => {
    expect(pokemonTypes.length).toBe(mocks[0].result.data.pokemon.types.length);
  });
});

test("renders pokemon moves", async () => {
  const { getAllByTestId } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <PokemonDetailPage pokemon={MOCK_POKEMON_DETAIL} />
    </MockedProvider>
  );
  const moveButton = await waitFor(() => getAllByTestId("moves-button"));
  await waitFor(() => fireEvent.click(moveButton[0]));
  await new Promise((r) => setTimeout(r, 3000));
  const pokemonMoves = await waitFor(() => getAllByTestId("move-chip"));
  await waitFor(() => {
    expect(pokemonMoves.length).toBe(mocks[0].result.data.pokemon.moves.length);
  });
});

test("renders pokemon sprites", async () => {
  const { getAllByTestId } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <PokemonDetailPage pokemon={MOCK_POKEMON_DETAIL} />
    </MockedProvider>
  );
  const spriteButton = await waitFor(() => getAllByTestId("sprites-button"));
  await waitFor(() => fireEvent.click(spriteButton[0]));
  await new Promise((r) => setTimeout(r, 3000));
  const pokemonSprites = await waitFor(() =>
    getAllByTestId("pokemon-sprite-image")
  );
  await waitFor(() => {
    expect(pokemonSprites.length).toBe(
      Object.keys(mocks[0].result.data.pokemon.sprites).length
    );
  });
});

test("catches Pokemon", async () => {
  const { getAllByTestId } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <PokemonDetailPage pokemon={MOCK_POKEMON_DETAIL} />
    </MockedProvider>
  );
  const catchButton = await waitFor(() => getAllByTestId("catch-button"));
  await waitFor(() => fireEvent.click(catchButton[0]));
  await new Promise((r) => setTimeout(r, 3000));
  const pokemonName = await waitFor(() => getAllByTestId("pokemon-name"));
  await waitFor(() => {
    expect(pokemonName[0].innerHTML.toLowerCase()).toBe(
      mocks[0].result.data.pokemon.name
    );
  });
});

const mockProviderAlwaysFailCatchPokemon = {
  ownedPokemons: mocks,
  releasePokemon: () => {},
  catchPokemon: () => {},
  isPokemonWithSameNicknameExist: (id: number, nickname: string): any => {},
  getAmountOwnedById: (id: number): any => {},
  getOwnedPokemonTotalAmount: (): any => {},
  canCatchPokemon: (): any => {
    return false;
  },
};

test("catches pokemon fails", async () => {
  const { getAllByTestId, getAllByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <PokemonContext.Provider value={mockProviderAlwaysFailCatchPokemon}>
        <ChakraProvider>
          <PokemonDetailPage pokemon={MOCK_POKEMON_DETAIL} />
        </ChakraProvider>
      </PokemonContext.Provider>
    </MockedProvider>
  );

  const catchButton = await waitFor(() => getAllByTestId("catch-button"));
  await waitFor(() => fireEvent.click(catchButton[0]));
  const failedText = getAllByText("Failed to catch!");
  await waitFor(() => {
    expect(failedText).toBeTruthy();
  });
});
