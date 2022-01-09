import React, { useContext, useEffect } from "react";
import PokemonCard from "../../components/PokemonCard";
import { PokemonContext } from "../../context";

const OwnedPokemonPage = () => {
  const { ownedPokemons } = useContext(PokemonContext);
  return (
    <div>
      <h1>Owned Pokemons</h1>
      {ownedPokemons &&
        Object.keys(ownedPokemons).map((id) =>
          ownedPokemons[id].map((ownedPokemon) => (
            <PokemonCard
              pokemon={{
                name: ownedPokemon.pokemon.name,
                id: ownedPokemon.pokemon.id,
                image: ownedPokemon.pokemon.sprites.front_default,
              }}
              nickname={ownedPokemon.nickname}
            />
          ))
        )}
    </div>
  );
};

export default OwnedPokemonPage;
