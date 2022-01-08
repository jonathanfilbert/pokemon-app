import React from 'react'
import PokemonCard from '../../components/PokemonCard'
import { AllPokemonPageContainer } from './styles'

const AllPokemonPage = () => {
  return(
    <AllPokemonPageContainer>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
    </AllPokemonPageContainer>
  )
}

export default AllPokemonPage
