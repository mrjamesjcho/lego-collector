import React from 'react';
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
    <div className="container d-flex flex-wrap mb-5">
      {elements}
    </div>
  );
}
