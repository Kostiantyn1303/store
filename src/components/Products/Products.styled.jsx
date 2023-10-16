import styled from "@emotion/styled";
export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 32px;
  margin-top: 32px;
`;
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
export const ProductsItems = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  transition: 0.3s;
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 280px;
  height: 320px;
  transition: 0.3s;
  padding: 15px;
  font-size: 18px;

  font-weight: 400;
  line-height: 160%;

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 420px;
  }
  @media screen and (min-width: 1280px) {
    width: 320px;
    height: 450px;
  }
  &:hover,
  &:focus {
    box-shadow: 1px 1px 10px 0px;
    transform: scale(1.03);
  }
`;
export const SVG = styled.svg`
  width: 24px;
  height: 24px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ProductsBtnIcon = styled.button`
  background-color: transparent;
  border: none;
  padding: 5px;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.1);
    fill: #ff6600;
    transition: fill 0.3s, transform 0.3s;
  }
`;
export const ButtonOrder = styled.button`
  padding: 7px;
  border-radius: 4px;
  border: none;
  background-color: orange;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: #ff6600;
    transition: background-color 0.3s, transform 0.3s;
  }
`;
export const Images = styled.img`
  width: 100%;
  height: 270px;
  border-radius: 4px;
`;
export const PriceText = styled.p`
  font-size: 20px;
  color: red;
`;
export const ButtonDetails = styled.button`
  margin: 0 auto;
  display: block;
  width: 200px;
  padding: 7px;
  border-radius: 4px;
  border: none;
  background-color: #d5cece;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: #ff6600;
    transition: background-color 0.3s, transform 0.3s;
  }
`;
