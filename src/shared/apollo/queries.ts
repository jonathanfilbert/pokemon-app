import { gql } from "@apollo/client";

export const GET_ALL_POKEMON = gql`
query getAllPokemon($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    status
    message
    results {
      url
      name
      image
      id
    }
  }
}
`

export const GET_POKEMON = gql`
query getPokemon($name: String!) {
  pokemon(name: $name) {
    id
    weight
    name
    base_experience
    moves {
      move {
        name
      }
    }
    height
    abilities {
      ability {
        name
      }
    }
    types {
      slot
      type {
        name
      }
    }
    sprites {
      back_default
      back_shiny
      front_default
      front_shiny
    }
  }
}
`
