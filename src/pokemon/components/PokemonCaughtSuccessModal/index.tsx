import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
} from "@chakra-ui/react";
import { IPokemon } from "pokeapi-typescript";
import { toTitleCase } from "../../../shared/utils";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { PokemonCaughtSucessModalContentWrapper } from "./styles";

type PokemonCaughtSuccessModalProps = {
  isOpen: boolean;
  onClose: () => any;
  pokemon: IPokemon;
  isValid: boolean;
  nickname: string;
  onChangeNickname: (nickname: string) => any;
  onSavePokemon: () => any;
};

/**
 * Modal shown when successfully caught the Pokemon
 *
 * @param pokemon - the pokemon being caught
 * @param isOpen - whether this modal is open,
 * @param onClose - close the modal,
 * @param isValid - whether the nickname is valid,
 * @param onChangeNickname - function called when typing nickname,
 * @param nickname - nickname being typed,
 * @param onSavePokemon - function called when saving the pokemon,
 * }
 */
const PokemonCaughtSuccessModal = ({
  pokemon,
  isOpen,
  onClose,
  isValid,
  onChangeNickname,
  nickname,
  onSavePokemon,
}: PokemonCaughtSuccessModalProps) => {
  /**
   * Handles the searching of Pokemon in Context by its nickname
   *
   * @param nickname - nickname of the searched Pokemon
   */
  const handleSearchPokemonByNickname = (nickname: string) => {
    onChangeNickname(nickname);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Gotcha, {toTitleCase(pokemon.name)} was caught!
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <PokemonCaughtSucessModalContentWrapper data-testid="sucess-modal">
            <Image
              alt={`${pokemon.name} sprite`}
              src={pokemon.sprites.front_default}
              width={100}
              height={100}
            />
            <div>
              Give a nickname to your caught {toTitleCase(pokemon.name)}!
            </div>
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSearchPokemonByNickname(e.target.value)
              }
              placeholder="Toped"
            />
            {!isValid && !!nickname && (
              <div className="error-message">
                {nickname} already exists, please try another.
              </div>
            )}
          </PokemonCaughtSucessModalContentWrapper>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => onSavePokemon()}
            colorScheme="green"
            disabled={!isValid || nickname === ""}
          >
            Join the team!
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PokemonCaughtSuccessModal;
