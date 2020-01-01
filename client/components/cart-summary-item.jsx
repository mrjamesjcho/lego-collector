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
            <h6>Qty</h6>
            <div className="qty-change d-flex justify-content-center align-items-center">
              <h5 className="qty-decrement btn btn-secondary d-flex justify-content-center align-items-center p-0">
                &#8722;
              </h5>
              <h5 className="item-qty text-center mx-2">{props.itemQuantity}</h5>
              <h5 className="qty-increment btn btn-secondary d-flex justify-content-center align-items-center p-0">
                &#x0002B;
              </h5>
            </div>
          </div>
          <div className="item-price d-flex flex-column justify-content-center align-items-center">
            <h6>Price</h6>
            <h5>{'$' + (props.itemPrice / 100)}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
