import { useRouter } from "next/router";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { IPokemon } from "pokeapi-typescript";
import { Button, useDisclosure, useToast } from "@chakra-ui/react";
import { PokemonContext } from "../../context";
import { toTitleCase } from "../../../shared/utils";
import PokemonCaughtSuccessModal from "../../components/PokemonCaughtSuccessModal";
import SEO from "../../../shared/components/SEO";

type PokemonDetailPageProps = {
  pokemon: IPokemon;
};

const PokemonDetailPage = ({ pokemon }: PokemonDetailPageProps) => {
  const { catchPokemon, isPokemonWithSameNicknameExist } =
    useContext(PokemonContext);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [nickname, setNickname] = useState("");

  const handleCatchPokemon = (pokemon: IPokemon) => {
    const generatedNumber = Math.random();
    if (generatedNumber < 0.5) {
      onOpen();
    } else {
      toast({
        title: `Failed to catch!`,
        description: `Oh no! ${toTitleCase(pokemon.name)} has broke away!`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleGiveNicknamePokemon = (nickname: string) => {
    setNickname(nickname);
    if (isPokemonWithSameNicknameExist(pokemon.id, nickname)) {
      setIsNicknameValid(false);
    } else {
      setIsNicknameValid(true);
    }
  };

  const handleSavePokemon = () => {
    catchPokemon(nickname, pokemon);
    onClose();
    toast({
      title: `Catch Success!`,
      description: `Gotcha, ${nickname} the ${toTitleCase(
        pokemon.name
      )} has joined your team!`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div>
      <SEO
        title={`${pokemon.name} | Pokemon App`}
        desc={`${pokemon.name} details, learn more on the Pokemon App.`}
      />
      <PokemonCaughtSuccessModal
        isValid={isNicknameValid}
        pokemon={pokemon}
        isOpen={isOpen}
        onClose={onClose}
        nickname={nickname}
        onChangeNickname={(nickname) => handleGiveNicknamePokemon(nickname)}
        onSavePokemon={() => handleSavePokemon()}
      />
      <h1>{toTitleCase(pokemon.name)}</h1>
      <Image src={pokemon.sprites.front_default} width="100px" height="100px" />
      <Button colorScheme="green" onClick={() => handleCatchPokemon(pokemon)}>
        Catch {pokemon.name}!
      </Button>
      <div>
        <h1>Pokemon Moves</h1>
        {pokemon.moves.map((move) => (
          <div>{move.move.name}</div>
        ))}
      </div>
      <div>
        <div>Pokemon Types</div>
        {pokemon.types.map((type) => (
          <div>{type.type.name}</div>
        ))}
      </div>
    </div>
  );
};

export default PokemonDetailPage;
