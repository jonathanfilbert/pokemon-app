import AllPokemonPage from "../src/pokemon/containers/AllPokemonPage";
import client from "../src/shared/apollo/client";
import { GET_ALL_POKEMON } from "../src/shared/apollo/queries";

export const getServerSideProps = async () => {
  const {data} = await client.query({
    query: GET_ALL_POKEMON,
    variables: {
      limit: 25,
      offset: 5
    },
  })
  const {results: pokemons} = data.pokemons
  return {
    props: {
      pokemons
    }
  }
}

export default AllPokemonPage
