import { useLazyQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GET_ALL_POKEMON } from "../../../shared/apollo/queries";
import PokemonCardLoader from "../../../shared/components/PokemonCardLoader";
import SEO from "../../../shared/components/SEO";
import PokemonCard from "../../components/PokemonCard";
import { AllPokemonPageContainer } from "./styles";

export type PokemonResponse = {
  url?: string;
  name: string;
  image: string;
  id: number;
};

export type PokeAPIResponse = {
  results: PokemonResponse[];
};

const AllPokemonPage = ({ results }: PokeAPIResponse) => {
  const [pokemons, setPokemons] = useState(results);
  const [getAllPokemon, { data, loading, error }] =
    useLazyQuery(GET_ALL_POKEMON);
  const toast = useToast();

  let scrollPage = 1;

  const scrollListener = (e) => {
    // detect user has reached the bottom
    const { innerHeight, pageYOffset } = window;
    const { offsetHeight } = document.body;
    if (innerHeight + pageYOffset >= offsetHeight) {
      if (!loading) {
        getAllPokemon({
          variables: { limit: 24, offset: scrollPage * 24 },
        }).then(() => {
          scrollPage += 1;
        });
      }
    }
  };

  useEffect(() => {
    if (error) {
      toast({
        title: `Error`,
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      setPokemons([...pokemons, ...data.pokemons.results]);
    }
  }, [data, scrollPage]);

  useEffect(() => {
    console.log(scrollPage, pokemons);
  }, [pokemons]);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener, { passive: true });
    // remove event listener prevent memory leaks
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div>
      <SEO
        title="Pokemon App"
        desc="Pokemon Application built for the mobile first generation."
      />
      <AllPokemonPageContainer>
        <div className="page-title">All Pokemon</div>
        <div className="all-pokemon">
          {pokemons &&
            pokemons?.map((pokemon) => (
              <PokemonCard key={`pokemon-${pokemon.id}`} pokemon={pokemon} />
            ))}
          {loading && (
            <>
              <PokemonCardLoader />
              <PokemonCardLoader />
              <PokemonCardLoader />
              <PokemonCardLoader />
              <PokemonCardLoader />
              <PokemonCardLoader />
              <div style={{ marginBottom: "12em" }} />
            </>
          )}
        </div>
      </AllPokemonPageContainer>
    </div>
  );
};

export default AllPokemonPage;
