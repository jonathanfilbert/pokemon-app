import styled from "@emotion/styled";
import { THEMES } from "../../../shared/utils";

type PokemonDetailPageWrapperProps = {
  gradient: string[];
  dominantColor: string;
};

export const PokemonDetailPageWrapper = styled.div<PokemonDetailPageWrapperProps>`
  width: 100%;
  position: relative;
  margin-bottom: 5em;
  .pokemon-hero {
    position: relative;
  }
  .pokemon-hero-image {
    background-image: linear-gradient(
      to bottom right,
      ${(props) => props.gradient[0]},
      ${(props) => props.gradient[1]}
    );
    height: 10em;
    border-radius: 0px 0px 3em 3em;
  }
  .pokemon-sprite-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .pokemon-name-info-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 0;
    left: 10px;
    font-weight: bold;
    font-size: x-large;
    color: ${THEMES.color.tertiary};
  }

  .pokemon-tab-switcher {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0px;
  }

  .catch-button {
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 1;
  }

  .pokemon-detail-title {
    font-weight: bold;
    color: ${(props) => props.dominantColor};
    font-size: x-large;
    margin-bottom: 10px;
  }

  .pokemon-details-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .pokemon-move-chip {
    padding: 5px 10px;
    background-color: ${THEMES.color.muted};
    font-weight: bold;
    color: ${THEMES.color.tertiary};
    border-radius: 10px;
  }

  .image-sprite-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 0;
  }

  .page-title {
    font-weight: bold;
    font-size: x-large;
    margin-bottom: 10px;
  }
`;
