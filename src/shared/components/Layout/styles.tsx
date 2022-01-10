import styled from "@emotion/styled";

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;

  .content-wrapper {
    padding-left: 20em;
    padding-right: 20em;
    padding-top: calc(2em + 50px);
    margin-bottom: 2em;
  }

  @media (max-width: 420px) {
    .content-wrapper {
      padding: 0px 10px;
      padding-top: calc(2em + 50px);
    }
  }
`;
