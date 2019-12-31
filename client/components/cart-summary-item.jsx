import React from 'react';

export default function CartSummaryItem(props) {
  return (
    <div className="container d-flex justify-content-center border rounded my-2 cart-item-container">
      <div className="image-container d-flex col-5 p-2">
        <img src={props.itemImage} className="cart-item-img rounded m-auto" />
      </div>
      <div className="d-flex-column p-2 col-5">
        <h4 className="item-name">{props.itemName}</h4>
        <div className="item-price mb-2">{'$' + (props.itemPrice / 100)}</div>
      </div>
      <div className="d-flex flex-column col-2 justify-content-center align-items-center item-quantity-container">
        <h5>Qty</h5>
        <h5>{props.itemQuantity}</h5>
      </div>
    </div>
  );
}
