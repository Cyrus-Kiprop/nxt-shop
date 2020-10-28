import React, { useState } from "react";

import Product from "./Product";
import Title from "../Title/Title";
import { ProductConsumer } from "../../context";

export default function ProductList() {
  console.log();
  return (
    <>
      <div className="py-5">
        <div className=" container">
          <Title name="our" title="products" />
          <div className="row">
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </>
  );
}
