import styled from "@emotion/styled";
import { THEMES } from "../../../shared/utils";

type PokemonTypeChipWrapperProps = {
  chipColor: string;
};

export const PokemonTypeChipWrapper = styled.div<PokemonTypeChipWrapperProps>`
  padding: 5px 10px;
  background-color: ${(props) => props.chipColor};
  font-weight: bold;
  color: ${THEMES.color.tertiary};
  border-radius: 10px;
`;
