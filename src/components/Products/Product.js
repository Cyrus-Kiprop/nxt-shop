import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";

export default function Product({
  product: { id, title, img, price, incart },
}) {
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div
          clasName="img-container p-5"
          onClick={() => console.log("you clicked me")}
        >
          <Link to="/details">
            <img src={img} alt="product-img" className="card-img-top" />
          </Link>
        </div>
      </div>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div``;
