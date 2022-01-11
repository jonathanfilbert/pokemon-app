import { Button, toast, useToast } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { toTitleCase } from "../../../shared/utils";
import { PokemonResponse } from "../../containers/AllPokemonPage";
import { PokemonContext } from "../../context";
import { PokemonCardWrapper } from "./styles";

type PokemonCardProps = {
  pokemon: PokemonResponse;
  nickname?: string;
};

const PokemonCard = ({ pokemon, nickname }: PokemonCardProps) => {
  const { releasePokemon } = useContext(PokemonContext);
  const { getAmountOwnedById } = useContext(PokemonContext);
  const toast = useToast();

  const handleReleasePokemon = () => {
    releasePokemon(nickname, pokemon);
    toast({
      title: `Released successfully!`,
      description: `You said goodbye to ${nickname} the ${toTitleCase(
        pokemon.name
      )}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <PokemonCardWrapper>
      <Link href={`/pokemon/${pokemon.name}`}>
        <a className="card-handle" />
      </Link>
      <div className="pokemon-card-content">
        <div className="pokemon-owned-badge">
          {getAmountOwnedById(pokemon.id)} owned
        </div>
        <Image
          alt={`${toTitleCase(pokemon.name)} image`}
          src={pokemon.image}
          objectFit="cover"
          width={250}
          height={250}
        />
        <div className="pokemon-card-detail">
          <div className="pokemon-id">#{pokemon.id}</div>
        </div>
        <div className="pokemon-name" data-testid="pokemon-name">
          {toTitleCase(pokemon.name)}
        </div>
        {nickname && <div className="pokemon-nickname">{nickname}</div>}
        {nickname && (
          <Button
            data-testid="release-button"
            colorScheme="red"
            className="release-button"
            onClick={() => handleReleasePokemon()}
          >
            Release
          </Button>
        )}
      </div>
    </PokemonCardWrapper>
  );
};

export default PokemonCard;
