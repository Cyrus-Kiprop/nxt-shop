import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ButtonContainer } from "./Shared/Button";
import { ProductContext } from "../context";

export default function Modal() {
  const value = useContext(ProductContext);
  const { modalOpen, handleCloseModal } = value;
  const { img, title, price } = value.modalProduct;
  console.log(value);
  console.log(value.modalOpen);
  return !modalOpen ? (
    false
  ) : (
    <ModalWrapper>
      <div className="container">
        <div className="row">
          <div
            id="modaler"
            className="col-8 mx-auto col-md col-lg-4 text-center text-capitalize"
          >
            <h5> item added to the cart</h5>
            <img src={img} className="img-fluid" alt="product" />
            <h5>{title}</h5>
            <h5>price : $ {price}</h5>

            <Link to="/">
              <ButtonContainer onClick={() => handleCloseModal()}>
                store
              </ButtonContainer>
            </Link>
            <Link to="/cart">
              <ButtonContainer onClick={() => handleCloseModal()}>
                go to cart
              </ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3) !important;
  display: flex;
  align-items: center;
  justify-contents: center;

  #modaler {
    background-color: var(--mainWhite) !important;
  }
`;
