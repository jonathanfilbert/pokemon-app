import React from "react";
import { getColorByType } from "../../../shared/utils";
import { PokemonTypeChipWrapper } from "./styles";

type PokemonTypeChipProps = {
  type: string;
  children: string;
};

/**
 * Chip component to render Pokemon types with matching background color
 *
 * @param type - the name of the Pokemon types e.g. leaf
 * @param children - the children component
 */
const PokemonTypeChip = ({ type, children }: PokemonTypeChipProps) => {
  return (
    <PokemonTypeChipWrapper
      chipColor={getColorByType(type)}
      data-testid="type-chip"
    >
      {children}
    </PokemonTypeChipWrapper>
  );
};

export default PokemonTypeChip;
