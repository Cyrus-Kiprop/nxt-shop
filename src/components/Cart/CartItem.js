import React from "react";

export default function CartItem({ item, value }) {
  console.log(item);
  const { id, title, img, price, total, count } = item;
  const { handleIncrement, handleDecrement, handleRemoveItem } = value;
  return (
    <div>
      <div className="row my-1 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={img}
            style={{ width: "5rem" }}
            className="img-fluid"
            alt="cart-item"
          />
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none"> Product : </span>
          {title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none"> price : </span>
          {price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className=" d-flex justify-content-center">
            <div>
              <span
                className="btn btn-black mx-1 "
                onClick={() => handleDecrement(id)}
              >
                -
              </span>
              <span className=" btn btn-black mx-1">{count}</span>
              <span
                className="btn btn-black mx-1 "
                onClick={() => handleIncrement(id)}
              >
                +
              </span>
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <div className="cart-icon">
            <i className="fa fa-trash" onClick={() => handleRemoveItem()}></i>
          </div>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <strong>item total : $ {total}</strong>
        </div>
      </div>
    </div>
  );
}
