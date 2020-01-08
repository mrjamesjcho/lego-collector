import React from 'react';
import { Link } from 'react-router-dom';

export default function CartSummaryItem(props) {
  return (
    <div className="cartItemContainer d-flex flex-wrap justify-content-center border-bottom mb-2">
      <Link to={`/product/${props.item.id}`} className="cartItemImgContainer d-flex col-md-5 p-2 h-100">
        <img
          src={props.item.images}
          className="cartItemImg rounded m-auto" />
      </Link>
      <div className="d-flex flex-column p-2 col-md-7 mt-2">
        <Link to={`/product/${props.item.id}`} >
          <h4 className="cartItemName">{props.item.name}</h4>
        </Link>
        <div className="cartItemPriceQtyContainer d-flex justify-content-between mt-3 pr-3">
          <div className="qtyContainer d-flex justify-content-center align-items-center mr-4">
            <h6 className="qtyTitle mr-2 my-0">Qty:</h6>
            <div className="qtyChange d-flex justify-content-center align-items-center border rounded overflow-hidden">
              <h6
                className="qtyDec btn btn-light d-flex justify-content-center align-items-center h-100 border-right rounded-0 p-0 m-0"
                onClick={() => props.onUpdateCartItem(props.item, -1)} >
                &#8722;
              </h6>
              <h6 className="qty text-center h-100 m-0">{props.item.count}</h6>
              <h6
                className="qtyInc btn btn-light d-flex justify-content-center align-items-center h-100 border-left rounded-0 p-0 m-0"
                onClick={() => props.onUpdateCartItem(props.item, 1)} >
                &#x0002B;
              </h6>
            </div>
          </div>
          <div
            className="removeBtnContainer d-flex justify-content-center align-items-center"
            onClick={() => props.onDeleteCartItem(props.item)} >
            <h6 className="removeBtn btn btn-link py-0 m-0">Delete</h6>
          </div>
          <div className="cartItemPriceContainer d-flex justify-content-center align-items-center">
            <h5 className="cartItemPrice m-0">{'$' + (props.item.price / 100)}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
