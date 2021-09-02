import styled from "styled-components";

export const StyledCertificationsSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
    margin-bottom: 50px;
  }

  .flex-container {
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
      height: 700px;
    }

    a, div {
      max-width: 200px;
      margin: 0 auto;

      img {
        max-width: 100%;
        max-height: 100%;
        filter: none;
      }
    }
  }
`;
