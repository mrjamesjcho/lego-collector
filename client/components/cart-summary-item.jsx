import React from 'react';

export default function CartSummaryItem(props) {
  return (
    <div className="container d-flex justify-content-center border rounded my-2 cart-item-container">
      <div className="image-container d-flex col-5 p-2">
        <img src={props.itemImage} className="cart-item-img rounded m-auto" />
      </div>
      <div className="d-flex-column p-2 col-7 mt-2">
        <h4 className="item-name">{props.itemName}</h4>
        <div className="item-price-qty d-flex justify-content-around mt-3">
          <div className="item-qty d-flex flex-column justify-content-center align-items-center">
            <h5>Qty</h5>
            <h5>{props.itemQuantity}</h5>
          </div>
          <div className="item-price d-flex flex-column justify-content-center align-items-center">
            <h5>Price</h5>
            <h5>{'$' + (props.itemPrice / 100)}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
