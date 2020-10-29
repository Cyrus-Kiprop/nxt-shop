import React from "react";
import { Link } from "react-router-dom";

import { ButtonContainer } from "./Shared/Button";
import { ProdcutConsumer } from "../context";

export default function Modal() {
  return (
    <ProductConsumer>
      {(value) => {
        const { modalOpen, closeModal } = value;
        const { img, title, price } = value.modalProduct;

        if (!modalOpen) {
          return null;
        } else {
          <modalContainer>
            <div className="container">
              <div calssName="row">
                <div
                  id="modal "
                  className="col-8 mx-auto col-md col-lg-4 text-center text-capitalize"
                >
                  <h5> item add to the cart</h5>
                </div>
              </div>
            </div>
          </modalContainer>;
        }
      }}
    </ProductConsumer>
  );
}
