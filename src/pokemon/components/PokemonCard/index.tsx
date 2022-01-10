import { Button, toast, useToast } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const { getAmountOwnedById } = useContext(PokemonContext);
  const toast = useToast();
  const handleClickPokemonCard = (name: string) => {
    router.push(`/pokemon/${name}`);
  };

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
      <div className="pokemon-owned-badge">
        {getAmountOwnedById(pokemon.id)} owned
      </div>
      <Image
        onClick={() => handleClickPokemonCard(pokemon.name)}
        src={pokemon.image}
        objectFit="cover"
        width={250}
        height={250}
      />
      <div className="pokemon-card-detail">
        <div className="pokemon-id">#{pokemon.id}</div>
      </div>
      <div className="pokemon-name">{toTitleCase(pokemon.name)}</div>
      {nickname && <div className="pokemon-nickname">{nickname}</div>}
      {nickname && (
        <Button
          colorScheme="red"
          className="release-button"
          onClick={() => handleReleasePokemon()}
        >
          Release
        </Button>
      )}
    </PokemonCardWrapper>
  );
};

export default PokemonCard;
