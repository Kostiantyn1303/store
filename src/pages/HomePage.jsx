import React from "react";
import Products from "../components/Products/Products";
import { useGetAllWithoutLimitQuery } from "../Appi";
import { ProductsList } from "./HomePage.styled";

function HomePage() {
  const { data, error, isLoading } = useGetAllWithoutLimitQuery();
  console.log(data);
  return (
    <div>
      <ProductsList sx={{ mb: 12.5 }}>
        {data?.map((product) => (
          <Products key={product._id} product={product} />
        ))}
      </ProductsList>
    </div>
  );
}

export default HomePage;
