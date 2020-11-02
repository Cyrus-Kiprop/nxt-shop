import React, { createContext, useState, useEffect } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => storeProducts);
  const [detailProducts, setDetailProducts] = useState(() => detailProduct);
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState();
  const [modalProduct, setModalProduct] = useState();
  const [modalOpen, setModalOpen] = useState(false);

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
    // const product = tempProducts[index];
    const product = getItem(id);
    // product.count = 1;
    const price = product.price;
    product.total = price;
    setProducts(tempProducts);
    setCart(tempProducts);
  };

  const handleOpenModal = (id = 1) => {
    const product = getItem(id);
    setModalProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => setModalOpen(false);

  return (
    <ProductContext.Provider
      value={{
        products,
        detailProduct: detailProducts,
        addToCart,
        handleDetail,
        product,
        cart,
        modalOpen,
        modalProduct: detailProduct,
        handleCloseModal,
        handleOpenModal,
        getItem,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
