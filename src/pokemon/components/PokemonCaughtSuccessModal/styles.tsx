import styled from "@emotion/styled";
import { THEMES } from "../../../shared/utils";

export const PokemonCaughtSucessModalContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .error-message {
    color: ${THEMES.color.error};
  }
`;
