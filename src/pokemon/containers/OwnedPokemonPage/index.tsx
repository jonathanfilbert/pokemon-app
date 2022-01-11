import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import PokemonCardLoader from "../../../shared/components/PokemonCardLoader";
import SEO from "../../../shared/components/SEO";
import { THEMES } from "../../../shared/utils";
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
        {Object.keys(ownedPokemons).length === 0 && (
          <div>
            <div className="cta-button">Nothing to see here...</div>
            <Link href="/">
              <Button
                backgroundColor={THEMES.color.primary}
                textColor={THEMES.color.tertiary}
              >
                Catch some Pokemon!
              </Button>
            </Link>
          </div>
        )}
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
