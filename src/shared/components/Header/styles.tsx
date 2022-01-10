import styled from "@emotion/styled";

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
  background-color: white;
  z-index: 100;

  @media (min-width: 420px) {
    padding: 10px 10em;
  }

  .header-title {
    font-weight: bold;
    font-size: xx-large;
    cursor: pointer;
    background-color: #d6ffdf;
    color: #2e9c39;
    border-radius: 5px;
    padding: 5px 10px;
  }

  .owned-title {
    font-weight: bold;
    font-size: medium;
    cursor: pointer;
    background-color: #d6ffdf;
    color: #2e9c39;
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
