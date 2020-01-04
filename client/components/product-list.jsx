import React from 'react';
import Carousel from './carousel';
import ProductListItem from './product-list-item';

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
      <div className="productListContainer container d-flex flex-wrap mb-5">
        {elements}
      </div>
    </React.Fragment>
  );
}
