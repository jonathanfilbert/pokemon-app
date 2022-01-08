import React from 'react'
import client from '../../../shared/apollo/client'
import { GET_ALL_POKEMON } from '../../../shared/apollo/queries'
import PokemonCard from '../../components/PokemonCard'
import { AllPokemonPageContainer } from './styles'

export type PokemonResponse = {
    url: string;
    name: string;
    image: string;
    id: number;
}

export type PokeAPIResponse = {
  pokemons: PokemonResponse[]
}

const AllPokemonPage = ({pokemons}: PokeAPIResponse) => {
  return(
    <div>
    <AllPokemonPageContainer>
      {pokemons.map(pokemon => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </AllPokemonPageContainer>
    </div>
  )
}

export default AllPokemonPage
