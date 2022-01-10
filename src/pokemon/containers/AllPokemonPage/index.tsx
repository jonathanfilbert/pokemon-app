import { useLazyQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
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
  const [scrollPage, setScrollPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [getAllPokemon, { data, error }] = useLazyQuery(GET_ALL_POKEMON, {
    onCompleted: () => {
      setScrollPage((prev) => prev + 1);
      setIsLoading(false);
    },
  });
  const toast = useToast();

  const scrollListener = useCallback(
    (e) => {
      // detect user has reached the bottom
      const { innerHeight, pageYOffset } = window;
      const { offsetHeight } = document.body;
      if (innerHeight + pageYOffset >= offsetHeight) {
        setIsLoading(true);
        getAllPokemon({
          variables: { limit: 24, offset: scrollPage * 24 },
        });
      }
    },
    [scrollPage, getAllPokemon, setScrollPage, data, pokemons]
  );

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
  }, [data]);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener, { passive: true });
    // remove event listener prevent memory leaks
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [
    scrollListener,
    scrollPage,
    getAllPokemon,
    setScrollPage,
    data,
    pokemons,
  ]);

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
          {isLoading && (
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
