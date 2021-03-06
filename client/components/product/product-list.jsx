import React from 'react';
import Carousel from '../carousel/carousel';
import ProductListItem from '../product/product-list-item';
import '../styles/product-list.css';
import '../styles/add-cart-confirm.css';

export default function ProductList(props) {
  const elements = props.products.map(product => {
    return (
      <ProductListItem
        key={product.id}
        product={product}
        onAddCartItem={props.onAddCartItem} />
    );
  });
  return (
    <React.Fragment>
      <Carousel featured={props.featured} />
      <div className="productListContainer container p-sm-0 px-3">
        <div className="productListBorder d-flex flex-wrap mb-5 border-top border-left">
          {elements}
        </div>
      </div>
    </React.Fragment>
  );
}
