import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ButtonContainer } from "./Shared/Button";
import { ProductConsumer } from "../context";

export default function Modal() {
  return (
    <ProductConsumer>
      {(value) => {
        const { modalOpen, closeModal } = value;
        const { img, title, price } = value.modalProduct;

        if (!modalOpen) {
          return null;
        } else {
          return (
            <ModalContainer>
              <div className="container">
                <div calssName="row">
                  <div
                    id="modal "
                    className="col-8 mx-auto col-md col-lg-4 text-center text-capitalize"
                  >
                    <h5> item added to the cart</h5>
                  </div>
                </div>
              </div>
            </ModalContainer>
          );
        }
      }}
    </ProductConsumer>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3)
  display: flex;
  align-items: center;
  justify-contents: center;
  #modal {
      background: var(--mainWhite)
  }
`;
