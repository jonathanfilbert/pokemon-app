import { useRouter } from 'next/router'
import Image from 'next/image'
import React from 'react'

const PokemonDetailPage = () => {
  const router = useRouter()
  const {name} = router.query;
  return(
    <div>
      <h1>{name}</h1>
      <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png" width="100px" height="100px" />
      <div>
        <div>Pokemon Moves</div>
        <div>Move 1 Movce 2</div>
        <div>Move 1 Movce 2</div>
      </div>
      <div>
        <div>Pokemon Types</div>
        <div>type 1</div>
        <div>type 2</div>
      </div>
    </div>
  )
}

export default PokemonDetailPage
