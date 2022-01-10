import styled from "@emotion/styled";

const PokemonCardLoaderWrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  position: relative;
  padding: 10px 15px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  .pokemon-card-detail {
    display: flex;
    flex-direction: column;
    margin-top: 0.25em;
    gap: 0.5em;
  }

  .pokemon-name {
    font-weight: bold;
  }

  .skeleton-box {
    background-color: lightgray;
    display: inline-block;
    height: 1em;
    position: relative;
    overflow: hidden;

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background: linear-gradient(
          90deg,
          #0000 33%,
          rgba(255, 255, 255, 0.3) 50%,
          #0000 66%
        )
        lightgray;
      animation: shimmer 1s infinite;
      content: "";
    }

    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }
  }

  .image-placeholder {
    width: 100%;
    height: 8em;
    margin-top: 1.5em;
    border-radius: 5px;
  }

  .id-placeholder {
    width: 70%;
    height: 1em;
  }

  .pokemon-owned-badge {
    position: absolute;
    right: 0px;
    top: 0px;
    border-radius: 0px 10px 0px 10px;
    padding: 5px 10px;
    color: #2e9c39;
    font-weight: bold;
    height: 25px;
  }
`;

export default PokemonCardLoaderWrapper;
