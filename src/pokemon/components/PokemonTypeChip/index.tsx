import React from "react";
import { getColorByType } from "../../../shared/utils";
import { PokemonTypeChipWrapper } from "./styles";

type PokemonTypeChipProps = {
  type: string;
  children: string;
};

const PokemonTypeChip = ({ type, children }: PokemonTypeChipProps) => {
  return (
    <PokemonTypeChipWrapper chipColor={getColorByType(type)}>
      {children}
    </PokemonTypeChipWrapper>
  );
};

export default PokemonTypeChip;
