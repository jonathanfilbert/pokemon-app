import React, { useContext, useEffect } from "react";
import PokemonCardLoader from "../../../shared/components/PokemonCardLoader";
import SEO from "../../../shared/components/SEO";
import PokemonCard from "../../components/PokemonCard";
import { PokemonContext } from "../../context";
import { OwnedPokemonPageWrapper } from "./styles";

const OwnedPokemonPage = () => {
  const { ownedPokemons } = useContext(PokemonContext);
  return (
    <OwnedPokemonPageWrapper>
      <SEO
        title="Owned Pokemon | Pokepedia"
        desc="My Owned Pokemon, add yours now on Pokepedia."
      />
      <div className="page-title">Owned Pokemons</div>
      <div className="owned-pokemon-grid">
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
    </OwnedPokemonPageWrapper>
  );
};

export default OwnedPokemonPage;
