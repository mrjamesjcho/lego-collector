/*eslint-disable */

import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  getProducts() {
    fetch('/api/products.php')
      .then(res => res.json())
      .then(data => {
        console.log('products: ', data);
        this.setState({ products: data });
      });
  }
  componentDidMount() {
    this.getProducts();
  }
  render() {
    const element = this.state.products.map(product => {
      return (
        <ProductListItem
          key={product.id}
          product={product}
          id={product.id}
          item={product}
          itemImages={product.images}
          itemName={product.name}
          itemPrice={product.price}
          itemDescription={product.shortDescription}
          onAddCartItem={this.props.onAddCartItem} />
      );
    });
    return (
      <div className="container d-flex flex-wrap justify-content-center mb-5">
        {element}
      </div>
    );
  }
}
