import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { IPokemon, IPokemonType } from "pokeapi-typescript";
import { Button, useDisclosure, useToast } from "@chakra-ui/react";
import { PokemonContext } from "../../context";
import { getColorByType, toTitleCase } from "../../../shared/utils";
import PokemonCaughtSuccessModal from "../../components/PokemonCaughtSuccessModal";
import SEO from "../../../shared/components/SEO";
import { PokemonDetailPageWrapper } from "./styles";
import PokemonTypeChip from "../../components/PokemonTypeChip";

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
  const [isTypeSectionActive, setIsTypeSectionActive] = useState(true);
  const [isMovesSectionActive, setIsMovesSectionActive] = useState(false);
  const [isSpritesSectionActive, setIsSpritesSectionActive] = useState(false);
  const dominantColor = getColorByType(pokemon.types[0].type.name);

  const handleCatchPokemon = (pokemon: IPokemon) => {
    const generatedNumber = Math.random();
    if (generatedNumber < 0.5) {
      onOpen();
    } else {
      toast({
        title: `Failed to catch!`,
        description: `Oh no! ${toTitleCase(pokemon.name)} has ran away!`,
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

  const generateTypeGradientArray = (types: IPokemonType[]): string[] => {
    if (types.length > 1) {
      return [...types.map((type) => getColorByType(type.type.name))];
    }
    const color = getColorByType(types[0].type.name);
    return [color, color];
  };

  useEffect(() => {
    if (isMovesSectionActive) {
      setIsTypeSectionActive(false);
      setIsSpritesSectionActive(false);
    }
  }, [isMovesSectionActive]);

  useEffect(() => {
    if (isSpritesSectionActive) {
      setIsTypeSectionActive(false);
      setIsMovesSectionActive(false);
    }
  }, [isSpritesSectionActive]);

  useEffect(() => {
    if (isTypeSectionActive) {
      setIsMovesSectionActive(false);
      setIsSpritesSectionActive(false);
    }
  }, [isTypeSectionActive]);

  return (
    <div>
      <SEO
        title={`${toTitleCase(pokemon.name)} | Pokemon App`}
        desc={`${toTitleCase(
          pokemon.name
        )} details, learn more on the Pokemon App.`}
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
      <PokemonDetailPageWrapper
        dominantColor={dominantColor}
        gradient={generateTypeGradientArray(pokemon.types)}
      >
        <Button
          className="catch-button"
          onClick={() => handleCatchPokemon(pokemon)}
          backgroundColor={dominantColor}
          color="white"
        >
          Catch {toTitleCase(pokemon.name)}!
        </Button>
        <div className="pokemon-hero">
          <div className="pokemon-name-info-container">
            <div>#{pokemon.id}</div>
            <div>{toTitleCase(pokemon.name)}</div>
          </div>
          <div className="pokemon-hero-image" />
          <div className="pokemon-sprite-image">
            <Image
              src={pokemon.sprites.front_default}
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="pokemon-tab-switcher">
          <Button
            paddingLeft={"10px"}
            backgroundColor={isTypeSectionActive ? dominantColor : "whitesmoke"}
            textColor={isTypeSectionActive ? "white" : "black"}
            onClick={() => setIsTypeSectionActive(true)}
          >
            Types
          </Button>
          <Button
            bgColor={isMovesSectionActive ? dominantColor : "whitesmoke"}
            textColor={isMovesSectionActive ? "white" : "black"}
            onClick={() => setIsMovesSectionActive(true)}
          >
            Moves
          </Button>
          <Button
            bgColor={isSpritesSectionActive ? dominantColor : "whitesmoke"}
            textColor={isSpritesSectionActive ? "white" : "black"}
            onClick={() => setIsSpritesSectionActive(true)}
          >
            Sprites
          </Button>
        </div>
        {isMovesSectionActive && (
          <div>
            <div className="pokemon-detail-title">Pokemon Moves</div>
            <div className="pokemon-details-section">
              {pokemon.moves.map((move) => (
                <div className="pokemon-move-chip">{move.move.name}</div>
              ))}
            </div>
          </div>
        )}
        {isTypeSectionActive && (
          <div>
            <div className="pokemon-detail-title">Pokemon Types</div>
            <div className="pokemon-details-section">
              {pokemon.types.map((type) => (
                <PokemonTypeChip type={type.type.name}>
                  {type.type.name}
                </PokemonTypeChip>
              ))}
            </div>
          </div>
        )}

        {isSpritesSectionActive && (
          <div>
            <div>Pokemon Types</div>
            <div className="pokemon-details-section">
              {Object.keys(pokemon.sprites).map(
                (key) =>
                  key !== "__typename" && (
                    <div className="image-sprite-container">
                      <Image
                        src={pokemon.sprites[key]}
                        width="300px"
                        height="300px"
                      />
                      <div>
                        {key
                          .split("_")
                          .map((word) => toTitleCase(word))
                          .join(" ")}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        )}
      </PokemonDetailPageWrapper>
    </div>
  );
};

export default PokemonDetailPage;
