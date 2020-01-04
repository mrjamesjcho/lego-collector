import React from 'react';
import { Link } from 'react-router-dom';

export default function CartSummaryItem(props) {
  return (
    <div className="cartItemContainer d-flex flex-wrap justify-content-center border rounded my-2">
      <Link to={`/product/${props.item.id}`} className="cartItemImgContainer d-flex col-md-5 p-2">
        <img
          src={props.item.images}
          className="cartItemImg rounded m-auto" />
      </Link>
      <div className="d-flex flex-column p-2 col-md-7 mt-2">
        <Link to={`/product/${props.item.id}`} >
          <h4 className="cartItemName">{props.item.name}</h4>
        </Link>
        <div className="cartItemPriceQtyContainer d-flex mt-3">
          <div className="qtyContainer d-flex justify-content-center align-items-center mr-4">
            <h6 className="qtyTitle mr-2">Qty:</h6>
            <div className="qtyChange d-flex justify-content-center align-items-center">
              <h5
                className="qtyDec btn btn-secondary d-flex justify-content-center align-items-center p-0"
                onClick={() => props.onUpdateCartItem(props.item, -1)} >
                &#8722;
              </h5>
              <h5 className="qty text-center mx-2">{props.item.count}</h5>
              <h5
                className="qtyInc btn btn-secondary d-flex justify-content-center align-items-center p-0"
                onClick={() => props.onUpdateCartItem(props.item, 1)} >
                &#x0002B;
              </h5>
            </div>
          </div>
          <div
            className="removeBtnContainer d-flex justify-content-center align-items-center mr-4"
            onClick={() => props.onDeleteCartItem(props.item)} >
            <h6 className="removeBtn btn btn-danger py-0">Delete</h6>
          </div>
          <div className="cartItemPriceContainer d-flex justify-content-center align-items-center">
            <h6 className="mr-2">Price:</h6>
            <h5 className="cartItemPrice">{'$' + (props.item.price / 100)}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
