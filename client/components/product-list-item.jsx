import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductListItem(props) {

  return (
    <Link to={`/product/${props.id}`} className="col-lg-3 col-md-4 col-sm-6 col-xs p-1 card-container">
      <div className="item-card card border-0 h-100" >
        <div className="item-image-container d-flex h-50">
          <img src={props.itemImages[0]} className="card-img-top item-image rounded m-auto p-2 h-100" />
        </div>
        <div className="card-body d-flex-column item-info-container h-50 p-2">
          <h5 className="card-title item-name mb-2">{props.itemName}</h5>
          <div className="card-text item-price-container d-flex mb-1">
            <h4 className="item-price mb-0">{'$' + (Math.floor(props.itemPrice / 100))}</h4>
            <h6 className="mb-0">{props.itemPrice.toString().slice(-2)}</h6>
          </div>
          <div className="card-text item-description">{props.itemDescription}</div>
        </div>
      </div>
    </Link>
  );
}
