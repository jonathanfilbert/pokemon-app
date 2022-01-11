import styled from "@emotion/styled";

const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  cursor: pointer;
  .logo-image-wrapper {
    position: relative;
    width: 4em;
    height: 2em;
  }

  .logo-text {
    font-weight: bold;
    font-size: x-large;
    width: 100%;
  }
`;

export default LogoWrapper;
