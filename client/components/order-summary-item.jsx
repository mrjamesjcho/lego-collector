import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderSummaryItem(props) {
  return (
    <div className="orderItemContainer d-flex flex-wrap justify-content-center border-bottom mb-2">
      <Link to={`/product/${props.item.id}`} className="cartItemImgContainer d-flex col-md-5 h-100 p-2 overflow-hidden">
        <img
          src={props.item.image}
          className="orderItemImg rounded m-auto" />
      </Link>
      <div className="orderNameQtyPriceContainer d-flex flex-column p-2 col-md-7 mt-2">
        <Link to={`/product/${props.item.id}`} >
          <h4 className="orderItemName">{props.item.name}</h4>
        </Link>
        <h5 className="orderItemQty">{`Qty: ${props.item.count}`}</h5>
        <h5 className="orderItemPrice">{'$' + (props.item.price / 100)}</h5>
      </div>
    </div>
  );
}
