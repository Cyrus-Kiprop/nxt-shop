import React, { useContext } from "react";
import { ProductContext } from "../../context";
import Title from "../Title/Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const value = useContext(ProductContext);
  console.log(value);
  const { cart } = value;
  return (
    <section>
      {cart && cart.length > 0 ? (
        <>
          <Title name="your" title="cart" />
          <CartColumns />
          <CartList value={value} />
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
}
