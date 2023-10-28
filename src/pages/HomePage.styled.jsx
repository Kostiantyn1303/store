import styled from "@emotion/styled";
export const ProductsList = styled.ul`
  display: flex;
  justify-content: center;
  row-gap: 20px;
  margin: 0 auto;
  flex-direction: column;
  flex: auto;
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;

    row-gap: 32px;
    column-gap: 32px;
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    column-gap: 16px;
  }
`;
