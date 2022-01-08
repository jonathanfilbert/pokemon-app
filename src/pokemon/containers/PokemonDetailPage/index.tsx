import { useRouter } from 'next/router'
import Image from 'next/image'
import React from 'react'

const PokemonDetailPage = ({pokemon}) => {
  console.log(pokemon)
  return(
    <div>
      <h1>{pokemon.name}</h1>
      <Image src={pokemon.sprites.front_default} width="100px" height="100px" />
      <div>
        <div>Pokemon Moves</div>
        {pokemon.moves.map(move => (
          <div>{move.move.name}</div>
        ))}
      </div>
      <div>
        <div>Pokemon Types</div>
        {pokemon.types.map(type => (
          <div>{type.type.name}</div>
        ))}
      </div>
    </div>
  )
}

export default PokemonDetailPage
