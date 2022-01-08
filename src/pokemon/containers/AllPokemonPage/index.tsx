import React from 'react'
import PokemonCard from '../../components/PokemonCard'
import { AllPokemonPageContainer } from './styles'

const AllPokemonPage = () => {
  return(
    <div>
    <AllPokemonPageContainer>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
    </AllPokemonPageContainer>
    </div>
  )
}

export default AllPokemonPage
