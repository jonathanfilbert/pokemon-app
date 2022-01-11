import styled from "@emotion/styled";
import { THEMES } from "../../../shared/utils";

export const PokemonCardWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: relative;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
  }

  .pokemon-card-detail {
    display: flex;
    flex-direction: column;
  }

  .pokemon-card-content {
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
  }

  .pokemon-name {
    font-weight: bold;
  }

  .pokemon-owned-badge {
    position: absolute;
    right: 0px;
    top: 0px;
    border-radius: 0px 10px 0px 10px;
    background-color: ${THEMES.color.secondary};
    padding: 5px 10px;
    color: ${THEMES.color.primary};
    font-weight: bold;
    z-index: 1;
  }

  .release-button {
    align-self: flex-end;
    margin-top: 1em;
    z-index: 3;
  }

  .pokemon-nickname {
    display: block;
    background: ${THEMES.color.secondary};
    color: ${THEMES.color.primary};
    padding: 5px 10px;
    border-radius: 10px;
    margin-top: 5px;
  }

  .card-handle {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
`;
