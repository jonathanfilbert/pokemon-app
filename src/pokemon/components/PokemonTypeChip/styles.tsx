import styled from "@emotion/styled";

type PokemonTypeChipWrapperProps = {
  chipColor: string;
};

export const PokemonTypeChipWrapper = styled.div<PokemonTypeChipWrapperProps>`
  padding: 5px 10px;
  background-color: ${(props) => props.chipColor};
  font-weight: bold;
  color: white;
  border-radius: 10px;
`;
