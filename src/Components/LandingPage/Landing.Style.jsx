import styled from "styled-components";

const LandingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  flex-direction: column;

  .fullscreen-overlay {
    position: absolute;
    top: 0;

    z-index: 999;
    padding: 2rem;

    img {
      margin: 0 auto;
      object-fit: cover;
      width: 700px;
      height: 700px;
      border-radius: 10px;
      cursor: pointer;
      overflow: scroll;

      @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
        margin-top: 5rem;
      }
    }
  }

  .images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 3rem;
    padding: 1rem;
    gap: 0.7rem;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    img {
      object-fit: cover;
      border-radius: 0.7rem;
      width: 550px;
      height: 500px;
      opacity: 0.5;
      @media screen and (max-width: 768px) {
        width: 300px;
        height: 300px;
      }
    }
  }

  h1 {
    margin-top: 6rem;
  }
`;

export { LandingWrapper };
