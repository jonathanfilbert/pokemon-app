import { useLazyQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { GET_ALL_POKEMON } from "../../../shared/apollo/queries";
import PokemonCardLoader from "../../../shared/components/PokemonCardLoader";
import SEO from "../../../shared/components/SEO";
import PokemonCard from "../../components/PokemonCard";
import PokemonFinishedScrolling from "../../components/PokemonFinishedScrolling";
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

/**
 * Page level component to render the all pokemon page
 *
 * @param results - the results from graphql queried by getServerSideProps
 */
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
  const [isFinished, setIsFinished] = useState(false);

  /** Scroll Listener function to detect whether user has reached the bottom of page.
   * If user has reached the bottom, set loading to true, and query the next pokemons.
   */
  const scrollListener = useCallback(
    (e) => {
      // detect user has reached the bottom
      const { innerHeight, pageYOffset } = window;
      const { offsetHeight } = document.body;
      if (innerHeight + pageYOffset >= offsetHeight && !isFinished) {
        setIsLoading(true);
        getAllPokemon({
          variables: { limit: 24, offset: scrollPage * 24 },
        });
      }
    },
    [scrollPage, getAllPokemon, setScrollPage, data, pokemons, isFinished]
  );

  /** useEffect to detect if any error happens whilst querying with useLazyQuery.
   * If error happens, call a toast with the error message.
   */
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

  /** useEffect to detect data changes on the query.
   * If there are data changes (query complete), then check also if it's not the last page,
   * then merge the newly queried pokemons.
   * If the new data does not have next (last page), then set the isFinished to true
   */
  useEffect(() => {
    if (data) {
      if (data.pokemons.next) {
        setPokemons([...pokemons, ...data.pokemons.results]);
      } else {
        setIsFinished(true);
      }
    }
  }, [data, setIsFinished]);

  /** useEffect to make sure every function reacts to the scrollListener
   */
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
        title="Pokepedia | Mobile first next-gen Pokedex"
        desc="Pokepedia is a pokemon application built for the mobile first generation."
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
        {isFinished && <PokemonFinishedScrolling />}
      </AllPokemonPageContainer>
    </div>
  );
};

export default AllPokemonPage;
