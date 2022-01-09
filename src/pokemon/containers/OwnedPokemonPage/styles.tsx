import styled from "@emotion/styled";

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
`;
