import styled from "@emotion/styled";

export const PokemonCardWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  position: relative;
  padding: 10px 15px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: relative;
  display: flex;
  flex-direction: column;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
  }

  .pokemon-card-detail {
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
    background-color: #d6ffdf;
    padding: 5px 10px;
    color: #2e9c39;
    font-weight: bold;
  }

  .release-button {
    align-self: flex-end;
    margin-top: 1em;
  }

  .pokemon-nickname {
    display: block;
    background: #ebffef;
    color: #399441;
    padding: 5px 10px;
    border-radius: 10px;
    margin-top: 5px;
  }
`;
