import { useLazyQuery, useMutation } from '@apollo/client'
import React, { useEffect, useState } from 'react'
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
  results: PokemonResponse[]
}


const AllPokemonPage = ({results}: PokeAPIResponse) => {
  const [pokemons, setPokemons] = useState(results)
  const [getAllPokemon, {data, loading, error}] = useLazyQuery(GET_ALL_POKEMON)
  let scrollPage = 1

  const scrollListener = (e) => {
    // detect user has reached the bottom
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement
    if(clientHeight + scrollTop >= scrollHeight - 20) {
      !loading && getAllPokemon({variables: {limit: 24, offset: scrollPage*24}})
      scrollPage += 1
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollListener, { passive:true })
    // remove event listener
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [])

  useEffect(() => {
    if(data) {
      const {pokemons: {results}} = data
      setPokemons([...pokemons, ...results])
    }
  }, [data])

  return(
    <div>
    <AllPokemonPageContainer>
      {pokemons?.map(pokemon => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </AllPokemonPageContainer>
    </div>
  )
}

export default AllPokemonPage
