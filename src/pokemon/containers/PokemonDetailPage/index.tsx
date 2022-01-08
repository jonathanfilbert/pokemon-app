import { useRouter } from 'next/router'
import Image from 'next/image'
import React, { useContext } from 'react'
import {IPokemon} from 'pokeapi-typescript'
import { PokemonContext } from '../../context'

type PokemonDetailPageProps = {
  pokemon: IPokemon
}

const PokemonDetailPage = ({pokemon}: PokemonDetailPageProps) => {
  const {catchPokemon} = useContext(PokemonContext)
  return(
    <div>
      <h1>{pokemon.name}</h1>
      <Image src={pokemon.sprites.front_default} width="100px" height="100px" />
      <button onClick={() => catchPokemon(pokemon)} >Catch {pokemon.name}!</button>
      <div>
        <h1>Pokemon Moves</h1>
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
