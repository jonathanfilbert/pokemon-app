import styled from "@emotion/styled";
import { THEMES } from "../../../shared/utils";

export const OwnedPokemonPageWrapper = styled.div`
  .owned-pokemon-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }

  @media (max-width: 420px) {
    .owned-pokemon-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .page-title {
    font-weight: bold;
    font-size: x-large;
    margin-bottom: 10px;
  }

  .cta-button {
    margin-bottom: 1em;
  }
`;
