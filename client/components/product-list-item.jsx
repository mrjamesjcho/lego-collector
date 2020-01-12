import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductListItem(props) {

  return (
    <div className="productContainer col-lg-3 col-md-4 col-sm-6 col-12 d-flex flex-column p-1 border-right border-bottom" >
      <Link to={`/product/${props.product.id}`} className="productImgContainer d-flex overflow-hidden p-2">
        <img src={props.product.images[0]} className="productImg m-auto" />
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
      <button className="addToCartBtn btn btn-warning mt-auto mx-2 mb-2" onClick={() => props.onAddCartItem(props.product)}>Add to Cart</button>
    </div>
  );
}
