import React, { createContext, useState, useEffect } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => storeProducts);
  const [detailProducts, setDetailProducts] = useState(() => detailProduct);

  useEffect(() => {
    setProducts(storeProducts);
  }, []);

  useEffect(() => {
    setDetailProducts(detailProduct);
  }, []);

  const handleDetail = () => {
    console.log("hello from detail");
  };

  const addToCart = () => {
    console.log("hello from add to cart");
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        detailProduct: detailProducts,
        addToCart,
        handleDetail,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
