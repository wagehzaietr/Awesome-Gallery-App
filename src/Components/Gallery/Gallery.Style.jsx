import styled from "styled-components";

const MainGallery = styled.div`
  display: flex;
  height: calc(100% - 7px);
  padding: 1rem;
  margin-top: 1rem;
`;

const MainGalleryItem = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-left: 1rem;
  padding-right: 1rem;
  gap: 0.8rem;

  @media screen and (max-width: 728px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 3rem;
  }

  .item{
    opacity: 0.8;
  }

  img {
    object-fit: contain;
    width: 450px;
    height: 450px;
    border-radius: 10px;
    opacity: 0.8;
    cursor: pointer;

    @media screen and (max-width: 728px) {
      width: 350px;
      height: 250px;
      object-fit: contain;
    }
  }
`;

export { MainGallery, MainGalleryItem };
