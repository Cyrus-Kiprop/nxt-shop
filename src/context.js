import React, { createContext } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  return (
    <ProductContext.Provider value={"hello this is the provider"}>
      {children}
    </ProductContext.Provider>
  );
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
