import styled from "@emotion/styled";

export const AllPokemonPageContainer = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: repeat(5, 1fr);
      @media (max-width: 420px) {
        grid-template-columns: repeat(2, 1fr);
      }
grid-gap: 1em;

.pokemon-id-and-owned-row {
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
`
