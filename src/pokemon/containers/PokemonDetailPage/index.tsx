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

/**
 * Page level component to render the detail of a pokemon
 *
 * @param pokemon - the pokemon to be rendered
 */
const PokemonDetailPage = ({ pokemon }: PokemonDetailPageProps) => {
  const { catchPokemon, isPokemonWithSameNicknameExist, canCatchPokemon } =
    useContext(PokemonContext);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [nickname, setNickname] = useState("");
  const [isTypeSectionActive, setIsTypeSectionActive] = useState(true);
  const [isMovesSectionActive, setIsMovesSectionActive] = useState(false);
  const [isSpritesSectionActive, setIsSpritesSectionActive] = useState(false);
  const dominantColor = getColorByType(pokemon.types[0].type.name);

  /**
   * Handles the catching of Pokemon
   *
   * @param pokemon - Pokemon to be caught
   */
  const handleCatchPokemon = (pokemon: IPokemon) => {
    const canCatch = canCatchPokemon();
    if (canCatch) {
      onOpen();
    } else {
      toast({
        title: `Failed to catch!`,
        description: `Oh no! ${toTitleCase(pokemon.name)} has run away!`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  /**
   * Handles typing the nickname of Pokemon.
   * Checks whether nickname exists in the provider,
   * if it does then set state to be invalid
   * if it does not then set state to be valid
   *
   * @param nickname - nickname given
   */
  const handleGiveNicknamePokemon = (nickname: string) => {
    setNickname(nickname);
    if (isPokemonWithSameNicknameExist(pokemon.id, nickname)) {
      setIsNicknameValid(false);
    } else {
      setIsNicknameValid(true);
    }
  };

  /**
   * Handles the saving of a pokemon with a valid nickname
   * Calls a function to save the pokemon in the context,
   * then calls a toast to indicate success
   */
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

  /**
   * Handles the creation of a 1 dimensional array with 2 colors based on a Pokemon types.
   * This is created with the assumption that a Pokemon can have at MAX 2 types.
   * cr: https://pokemon.fandom.com/wiki/Types#:~:text=Pok%C3%A9mon%20themselves%20can%20have%20up,%2FFlying%2Dtype%20move).
   *
   * If a pokemon has 2 types, then the array would be [type1, type 2]
   * If a pokemon has 1 type, then the array would be [type1,type1]
   *
   * @param {IPokemonType[]} types - types array of the pokemon
   * @return an array of types
   */
  const generateTypeGradientArray = (types: IPokemonType[]): string[] => {
    if (types.length > 1) {
      return [...types.map((type) => getColorByType(type.type.name))];
    }
    const color = getColorByType(types[0].type.name);
    return [color, color];
  };

  /**
   * useEffect to detect if the moves section is active.
   * disables the other sections.
   */
  useEffect(() => {
    if (isMovesSectionActive) {
      setIsTypeSectionActive(false);
      setIsSpritesSectionActive(false);
    }
  }, [isMovesSectionActive]);

  /**
   * useEffect to detect if the sprites section is active.
   * disables the other sections.
   */
  useEffect(() => {
    if (isSpritesSectionActive) {
      setIsTypeSectionActive(false);
      setIsMovesSectionActive(false);
    }
  }, [isSpritesSectionActive]);

  /**
   * useEffect to detect if the moves section is active.
   * disables the other sections.
   */
  useEffect(() => {
    if (isTypeSectionActive) {
      setIsMovesSectionActive(false);
      setIsSpritesSectionActive(false);
    }
  }, [isTypeSectionActive]);

  return (
    <div>
      <SEO
        title={`${toTitleCase(pokemon.name)} | Pokepedia`}
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
          data-testid="catch-button"
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
            <div data-testid="pokemon-name">{toTitleCase(pokemon.name)}</div>
          </div>
          <div className="pokemon-hero-image" />
          <div className="pokemon-sprite-image">
            <Image
              alt={`${pokemon.name} sprite`}
              src={pokemon.sprites.front_default}
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="pokemon-tab-switcher">
          <Button
            data-testid="type-button"
            paddingLeft={"10px"}
            backgroundColor={isTypeSectionActive ? dominantColor : "whitesmoke"}
            textColor={isTypeSectionActive ? "white" : "black"}
            onClick={() => setIsTypeSectionActive(true)}
          >
            Types
          </Button>
          <Button
            data-testid="moves-button"
            bgColor={isMovesSectionActive ? dominantColor : "whitesmoke"}
            textColor={isMovesSectionActive ? "white" : "black"}
            onClick={() => setIsMovesSectionActive(true)}
          >
            Moves
          </Button>
          <Button
            data-testid="sprites-button"
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
                <div
                  data-testid="move-chip"
                  className="pokemon-move-chip"
                  key={move.move.name}
                >
                  {move.move.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {isTypeSectionActive && (
          <div>
            <div className="pokemon-detail-title">Pokemon Types</div>
            <div className="pokemon-details-section">
              {pokemon.types.map((type) => (
                <PokemonTypeChip type={type.type.name} key={type.type.name}>
                  {type.type.name}
                </PokemonTypeChip>
              ))}
            </div>
          </div>
        )}

        {isSpritesSectionActive && (
          <div>
            <div className="pokemon-detail-title">Pokemon Sprites</div>
            <div className="pokemon-details-section">
              {Object.keys(pokemon.sprites).map(
                (key) =>
                  key !== "__typename" && (
                    <div
                      key={key}
                      className="image-sprite-container"
                      data-testid="pokemon-sprite-image"
                    >
                      <Image
                        alt={`${pokemon.name} sprite`}
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
