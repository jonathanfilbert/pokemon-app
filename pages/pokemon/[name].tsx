import { GetServerSideProps } from "next";
import PokemonDetailPage from "../../src/pokemon/containers/PokemonDetailPage";
import client from "../../src/shared/apollo/client";
import { GET_POKEMON } from "../../src/shared/apollo/queries";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {name} = ctx.query
  const {data} = await client.query({
    query: GET_POKEMON,
    variables: {
      name
    },
  })
  const {pokemon} = data
  return {
    props: {
      pokemon
    }
  }
}

export default PokemonDetailPage
