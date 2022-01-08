import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { PokemonResponse } from '../../containers/AllPokemonPage'
import { PokemonCardWrapper } from './styles'

type PokemonCardProps = {
  pokemon: PokemonResponse,
  nickname?: string
}

const PokemonCard = ({pokemon, nickname}:PokemonCardProps) => {
  const router = useRouter()
  const handleClickPokemonCard = (name:string) => {
    router.push(`/pokemon/${name}`)
  }

  return(
    <PokemonCardWrapper onClick={() => handleClickPokemonCard(pokemon.name)} >
      <div className='pokemon-id-and-owned-row' >
        <div>{pokemon.id}</div>
        <div>00 owned</div>
       </div>
      <Image src={pokemon.image} objectFit="contain" width={250} height={250} />
      <div>{nickname ? nickname : ""}</div>
      <div>{pokemon.name}</div>
    </PokemonCardWrapper>
  )
}

export default PokemonCard
