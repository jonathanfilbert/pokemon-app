import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 0px 0px 2px 2px;

  .header-title {
    font-weight: bold;
    font-size: xx-large;
    cursor: pointer;
  }

  .owned-title {
    font-weight: bold;
    font-size: medium;
    cursor: pointer;
    color: green;
  }
`;
