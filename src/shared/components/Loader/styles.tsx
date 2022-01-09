import styled from "@emotion/styled";

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 30px;
  margin-top: 3em;
  .spinner {
    animation: rotate 1.5s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;
