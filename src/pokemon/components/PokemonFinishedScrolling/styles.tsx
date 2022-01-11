import styled from "@emotion/styled";

const PokemonFinishedScrollingWrapper = styled.div`
  width: 100%;
  height: 5em;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;

  .image-container {
    position: relative;
    height: 100%;
    width: 50%;
  }

  .end-message {
    font-weight: bold;
    font-size: x-large;
  }
`;
export default PokemonFinishedScrollingWrapper;
