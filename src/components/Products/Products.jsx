import React from "react";
import sprite from "../../images/sprite.svg";
import MyModal from "../Modal/Modal-Window";
import { useState } from "react";

import {
  ProductsContainer,
  ProductsItems,
  SVG,
  ButtonContainer,
  ProductsBtnIcon,
  ButtonOrder,
  Images,
  PriceText,
  ButtonDetails,
} from "./Products.styled";
const Products = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ProductsContainer>
      <ProductsItems key={product.name}>
        {" "}
        <Images src={product.image} alt="" />{" "}
        <ButtonDetails type={"button"} onClick={() => setIsModalOpen(true)}>
          Деталі
        </ButtonDetails>
        <p>{product.name}</p>
        <PriceText>{product.price} </PriceText>{" "}
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

      <MyModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </ProductsContainer>
  );
};

export default Products;
