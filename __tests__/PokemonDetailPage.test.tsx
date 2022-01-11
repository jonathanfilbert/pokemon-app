import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { GET_POKEMON } from "../src/shared/apollo/queries";
import { MockedProvider } from "@apollo/client/testing";
import PokemonDetailPage from "../pages/pokemon/[name]";
import { MOCK_POKEMON_DETAIL } from "./__mocks__";

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
        pokemon: {
          id: 1,
          weight: 69,
          name: "bulbasaur",
          base_experience: 64,
          moves: [
            {
              move: {
                name: "razor-wind",
              },
            },
            {
              move: {
                name: "swords-dance",
              },
            },
            {
              move: {
                name: "cut",
              },
            },
            {
              move: {
                name: "bind",
              },
            },
            {
              move: {
                name: "vine-whip",
              },
            },
            {
              move: {
                name: "headbutt",
              },
            },
            {
              move: {
                name: "tackle",
              },
            },
            {
              move: {
                name: "body-slam",
              },
            },
            {
              move: {
                name: "take-down",
              },
            },
            {
              move: {
                name: "double-edge",
              },
            },
            {
              move: {
                name: "growl",
              },
            },
            {
              move: {
                name: "strength",
              },
            },
            {
              move: {
                name: "mega-drain",
              },
            },
            {
              move: {
                name: "leech-seed",
              },
            },
            {
              move: {
                name: "growth",
              },
            },
            {
              move: {
                name: "razor-leaf",
              },
            },
            {
              move: {
                name: "solar-beam",
              },
            },
            {
              move: {
                name: "poison-powder",
              },
            },
            {
              move: {
                name: "sleep-powder",
              },
            },
            {
              move: {
                name: "petal-dance",
              },
            },
            {
              move: {
                name: "string-shot",
              },
            },
            {
              move: {
                name: "toxic",
              },
            },
            {
              move: {
                name: "rage",
              },
            },
            {
              move: {
                name: "mimic",
              },
            },
            {
              move: {
                name: "double-team",
              },
            },
            {
              move: {
                name: "defense-curl",
              },
            },
            {
              move: {
                name: "light-screen",
              },
            },
            {
              move: {
                name: "reflect",
              },
            },
            {
              move: {
                name: "bide",
              },
            },
            {
              move: {
                name: "sludge",
              },
            },
            {
              move: {
                name: "skull-bash",
              },
            },
            {
              move: {
                name: "amnesia",
              },
            },
            {
              move: {
                name: "flash",
              },
            },
            {
              move: {
                name: "rest",
              },
            },
            {
              move: {
                name: "substitute",
              },
            },
            {
              move: {
                name: "snore",
              },
            },
            {
              move: {
                name: "curse",
              },
            },
            {
              move: {
                name: "protect",
              },
            },
            {
              move: {
                name: "sludge-bomb",
              },
            },
            {
              move: {
                name: "mud-slap",
              },
            },
            {
              move: {
                name: "giga-drain",
              },
            },
            {
              move: {
                name: "endure",
              },
            },
            {
              move: {
                name: "charm",
              },
            },
            {
              move: {
                name: "swagger",
              },
            },
            {
              move: {
                name: "fury-cutter",
              },
            },
            {
              move: {
                name: "attract",
              },
            },
            {
              move: {
                name: "sleep-talk",
              },
            },
            {
              move: {
                name: "return",
              },
            },
            {
              move: {
                name: "frustration",
              },
            },
            {
              move: {
                name: "safeguard",
              },
            },
            {
              move: {
                name: "sweet-scent",
              },
            },
            {
              move: {
                name: "synthesis",
              },
            },
            {
              move: {
                name: "hidden-power",
              },
            },
            {
              move: {
                name: "sunny-day",
              },
            },
            {
              move: {
                name: "rock-smash",
              },
            },
            {
              move: {
                name: "facade",
              },
            },
            {
              move: {
                name: "nature-power",
              },
            },
            {
              move: {
                name: "ingrain",
              },
            },
            {
              move: {
                name: "knock-off",
              },
            },
            {
              move: {
                name: "secret-power",
              },
            },
            {
              move: {
                name: "grass-whistle",
              },
            },
            {
              move: {
                name: "bullet-seed",
              },
            },
            {
              move: {
                name: "magical-leaf",
              },
            },
            {
              move: {
                name: "natural-gift",
              },
            },
            {
              move: {
                name: "worry-seed",
              },
            },
            {
              move: {
                name: "seed-bomb",
              },
            },
            {
              move: {
                name: "energy-ball",
              },
            },
            {
              move: {
                name: "leaf-storm",
              },
            },
            {
              move: {
                name: "power-whip",
              },
            },
            {
              move: {
                name: "captivate",
              },
            },
            {
              move: {
                name: "grass-knot",
              },
            },
            {
              move: {
                name: "venoshock",
              },
            },
            {
              move: {
                name: "round",
              },
            },
            {
              move: {
                name: "echoed-voice",
              },
            },
            {
              move: {
                name: "grass-pledge",
              },
            },
            {
              move: {
                name: "work-up",
              },
            },
            {
              move: {
                name: "grassy-terrain",
              },
            },
            {
              move: {
                name: "confide",
              },
            },
          ],
          height: 7,
          abilities: [
            {
              ability: {
                name: "overgrow",
              },
            },
            {
              ability: {
                name: "chlorophyll",
              },
            },
          ],
          types: [
            {
              slot: 1,
              type: {
                name: "grass",
              },
            },
            {
              slot: 2,
              type: {
                name: "poison",
              },
            },
          ],
          sprites: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
          },
        },
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
