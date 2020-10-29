import React, { createContext, useState, useEffect } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => storeProducts);
  const [detailProducts, setDetailProducts] = useState(() => detailProduct);
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState();
  const [modalProduct, setModalProduct] = useState();
  const [modalOPen, setModalOpen] = useState();

  // patch the state

  const populateState = (initialState, setState) => {
    let tempProducts = [];
    if (Array.isArray(initialState)) {
      initialState.forEach((product) => {
        const eachProduct = { ...product };
        tempProducts = [...tempProducts, eachProduct];
      });
    } else {
      tempProducts = { ...initialState };
    }
    setState(tempProducts);
  };

  useEffect(() => {
    populateState(storeProducts, setProducts);
    populateState(detailProduct, setDetailProducts);
  }, []);

  const getItem = (id) => products.find((item) => item.id === id);

  const handleDetail = (id) => {
    const product = getItem(id);
    setProduct(product);
    return;
  };

  const addToCart = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.count = 1;
    const price = product.price;
    product.total = price;
    setProducts(tempProducts);
    setCart(tempProducts);
    console.log(cart);
  };

  const openModal = (id) => {
    const product = this.getItem(id);
    setModalProduct(product);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        detailProduct: detailProducts,
        addToCart,
        handleDetail,
        product,
        cart,
        modalOPen: true,
        modalProduct: detailProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
