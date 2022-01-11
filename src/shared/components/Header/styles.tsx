import styled from "@emotion/styled";
import { THEMES } from "../../utils";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 0px 0px 2px 2px;
  position: fixed;
  background-color: ${THEMES.color.tertiary};
  z-index: 100;

  @media (min-width: 420px) {
    padding: 10px 10em;
  }

  .header-title {
    font-weight: bold;
    font-size: xx-large;
    cursor: pointer;
    background-color: ${THEMES.color.secondary};
    color: ${THEMES.color.primary};
    border-radius: 5px;
    padding: 5px 10px;
  }

  .owned-title {
    font-weight: bold;
    font-size: medium;
    cursor: pointer;
    color: ${THEMES.color.tertiary};
    background-color: ${THEMES.color.primary};
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: none;
    transition: all 0.2s;
  }

  :hover {
    .owned-title {
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      transition: all 0.2s;
    }
  }
`;
