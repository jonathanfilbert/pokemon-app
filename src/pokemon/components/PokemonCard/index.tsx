import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { PokemonResponse } from '../../containers/AllPokemonPage'
import { PokemonContext } from '../../context'
import { PokemonCardWrapper } from './styles'

type PokemonCardProps = {
  pokemon: PokemonResponse,
  nickname?: string
}

const PokemonCard = ({pokemon, nickname}:PokemonCardProps) => {
  const {releasePokemon} = useContext(PokemonContext)
  const router = useRouter()
  const handleClickPokemonCard = (name:string) => {
    router.push(`/pokemon/${name}`)
  }

  const handleReleasePokemon = () => {
    releasePokemon(nickname, pokemon)
  }

  return(
    <PokemonCardWrapper onClick={() => !nickname && handleClickPokemonCard(pokemon.name)} >
      <div className='pokemon-id-and-owned-row' >
        <div>{pokemon.id}</div>
        <div>00 owned</div>
       </div>
      <Image src={pokemon.image} objectFit="contain" width={250} height={250} />
      <div>{nickname ? nickname : ""}</div>
      <div>{pokemon.name}</div>
      {nickname && <button onClick={() => handleReleasePokemon()} >Release</button>}
    </PokemonCardWrapper>
  )
}

export default PokemonCard
