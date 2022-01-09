import { Button, toast, useToast } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
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
      description: `You said goodbye to ${nickname} the ${pokemon.name}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <PokemonCardWrapper>
      <div className="pokemon-id-and-owned-row">
        <div>{pokemon.id}</div>
        <div>{getAmountOwnedById(pokemon.id)} owned</div>
      </div>
      <Image
        onClick={() => handleClickPokemonCard(pokemon.name)}
        src={pokemon.image}
        objectFit="contain"
        width={250}
        height={250}
      />
      <div>{nickname ? nickname : ""}</div>
      <div>{pokemon.name}</div>
      {nickname && (
        <Button bgColor="white" onClick={() => handleReleasePokemon()}>
          Release
        </Button>
      )}
    </PokemonCardWrapper>
  );
};

export default PokemonCard;
