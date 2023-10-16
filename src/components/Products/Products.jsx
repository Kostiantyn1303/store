import React from "react";
import sprite from "../../images/sprite.svg";
import Data from "../Date.json";
import {
  ProductsContainer,
  ProductsList,
  ProductsItems,
  SVG,
  ButtonContainer,
  ProductsBtnIcon,
  ButtonOrder,
  Images,
  PriceText,
  ButtonDetails,
} from "./Products.styled";
function Products() {
  const Info = Data;
  console.log(Info);
  return (
    <ProductsContainer>
      <ProductsList>
        {Info?.map((item) => (
          <ProductsItems key={item.name}>
            {" "}
            <Images src={item.image} alt="" />{" "}
            <ButtonDetails>Деталі</ButtonDetails>
            <p>{item.name}</p>
            <PriceText>{item.price} </PriceText>{" "}
            <ButtonContainer>
              {" "}
              <ButtonOrder>Замовити</ButtonOrder>{" "}
              <ProductsBtnIcon title="Додати в корзину">
                {" "}
                <SVG>
                  <use href={sprite + "#icon-cart"} />
                </SVG>
              </ProductsBtnIcon>{" "}
            </ButtonContainer>
          </ProductsItems>
        ))}
      </ProductsList>
    </ProductsContainer>
  );
}

export default Products;
