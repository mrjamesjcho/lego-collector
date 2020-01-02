import React from 'react';
import { Link } from 'react-router-dom';

export default function CartSummaryItem(props) {
  return (
    <div className="container d-flex flex-wrap justify-content-center border rounded my-2 cart-item-container">
      <Link to={`/product/${props.id}`} className="image-container d-flex col-md-5 p-2">
        <img src={props.itemImage} className="cart-item-img rounded m-auto" />
      </Link>
      <div className="d-flex-column p-2 col-md-7 mt-2">
        <Link to={`/product/${props.id}`} >
          <h4 className="cart-item-name">{props.itemName}</h4>
        </Link>
        <div className="item-price-qty d-flex mt-3">
          <div className="item-qty d-flex justify-content-center align-items-center mr-4">
            <h6 className="mr-2">Qty:</h6>
            <div className="qty-change d-flex justify-content-center align-items-center">
              <h5
                className="qty-decrement btn btn-secondary d-flex justify-content-center align-items-center p-0"
                onClick={() => props.onUpdateCartItem(props.item, -1)} >
                &#8722;
              </h5>
              <h5 className="item-qty text-center mx-2">{props.itemQuantity}</h5>
              <h5
                className="qty-increment btn btn-secondary d-flex justify-content-center align-items-center p-0"
                onClick={() => props.onUpdateCartItem(props.item, 1)} >
                &#x0002B;
              </h5>
            </div>
          </div>
          <div className="remove-btn d-flex justify-content-center align-items-center mr-4">
            <h6
              className="remove-item btn btn-danger py-0"
              onClick={() => props.onDeleteCartItem(props.item)}>Delete</h6>
          </div>
          <div className="item-price d-flex justify-content-center align-items-center">
            <h6 className="mr-2">Price:</h6>
            <h5>{'$' + (props.itemPrice / 100)}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
