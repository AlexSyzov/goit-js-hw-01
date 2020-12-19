import styled from "styled-components";

export const GalleryItem = styled.li`
  width: 426px;
  margin-bottom: 20px;

  @media (min-width: 1915px) {
    &:not(:nth-child(4n)) {
      margin-right: 20px;
    }
  }

  @media (min-width: 1441px) and (max-width: 1914px) {
    &:not(:nth-child(3n)) {
      margin-right: 20px;
    }
  }

  @media (min-width: 966px) and (max-width: 1440px) {
    &:not(:nth-child(2n)) {
      margin-right: 20px;
    }
  }

  @media (max-width: 965px) {
    margin-right: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 350px;
  border-radius: 40px;
  box-shadow: 6px 6px 16px rgb(61, 59, 59);
  object-fit: cover;
  cursor: pointer;
  transition: all 0.17s linear;

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`;
