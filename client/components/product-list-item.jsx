import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductListItem(props) {

  return (
    <div className="productContainer col-lg-3 col-md-4 col-sm-6 col-8 border-0 p-1" >
      <div className="productInfoContainer d-flex flex-column border h-100">
        <Link to={`/product/${props.product.id}`} className="productImgContainer d-flex">
          <img src={props.product.images[0]} className="productImg m-auto p-2" />
        </Link>
        <div className="productNamePriceContainer d-flex flex-column flex-fill p-2">
          <Link to={`/product/${props.product.id}`} className="productNameContainer">
            <h5 className="productName mb-2">{props.product.name}</h5>
          </Link>
          <div className="productPriceContainer d-flex mb-1">
            <h4 className="priceDollars mb-0">{'$' + (Math.floor(props.product.price / 100))}</h4>
            <h6 className="priceCents mb-0">{props.product.price.toString().slice(-2)}</h6>
          </div>
        </div>
        <button className="addToCartBtn btn btn-info mt-auto mx-2 mb-2" onClick={() => props.onAddCartItem(props.product)}>Add to Cart</button>
      </div>
    </div>
  );
}
