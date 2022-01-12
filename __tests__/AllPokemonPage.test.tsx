import { render, screen, waitFor } from "@testing-library/react";
import AllPokemonPage from "../pages";
import { GET_ALL_POKEMON } from "../src/shared/apollo/queries";
import { MockedProvider } from "@apollo/client/testing";

const mocks: any = [
  {
    request: {
      query: GET_ALL_POKEMON,
      variables: {
        limit: 1,
        offset: 0,
      },
    },
    result: {
      data: {
        pokemons: {
          count: 1118,
          next: "https://pokeapi.co/api/v2/pokemon/?offset=1&limit=1",
          previous: null,
          status: true,
          message: "",
          results: [
            {
              url: "https://pokeapi.co/api/v2/pokemon/1/",
              name: "bulbasaur",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
              id: 1,
            },
          ],
        },
      },
    },
  },
];

test("renders all pokemon page", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AllPokemonPage
        results={[
          {
            url: "https://pokeapi.co/api/v2/pokemon/1/",
            name: "bulbasaur",
            image:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            id: 1,
          },
        ]}
      />
    </MockedProvider>
  );

  await waitFor(() => {
    const bulba = screen.queryByText("Bulbasaur");
    expect(bulba.innerHTML).toBe("Bulbasaur");
  });
});
