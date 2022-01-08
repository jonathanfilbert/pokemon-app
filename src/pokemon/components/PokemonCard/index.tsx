import Image from 'next/image'
import React from 'react'
import { PokemonCardWrapper } from './styles'

const PokemonCard = () => {
  return(
    <PokemonCardWrapper>
      <div className='pokemon-id-and-owned-row' >
        <div>002</div>
        <div>02 owned</div>
       </div>
      <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png" objectFit="contain" width={250} height={250} />
      <div>Ditto</div>
    </PokemonCardWrapper>
  )
}

export default PokemonCard
