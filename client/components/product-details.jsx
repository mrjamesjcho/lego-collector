import React from 'react';
import { Link } from 'react-router-dom';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      product: null
    };
  }
  getProducts(id) {
    fetch('/api/products.php?id=' + id)
      .then(response => response.json())
      .then(data => {
        this.setState({ product: data[0] });
      });
  }
  componentDidMount() {
    this.getProducts(this.props.match.params.id);
  }
  render() {
    if (this.state.product) {
      return (
        <div className='product-details-container container'>
          <Link to='/products' className='back-to-catalog' >&lt; <u>continue shopping</u></Link>
          <div className="product-details-image-info-container row">
            <div className="product-details-image-container col-7 h-100 d-flex align-items-center">
              <img src={this.state.product.images[0]} className="item-image rounded h-100 w-100 m-auto p-2" />
            </div>
            <div className="product-info-container col-5 d-flex-column">
              <h1 className="product-name">{this.state.product.name}</h1>
              <h3 className="product-price">{'$' + (this.state.product.price / 100)}</h3>
              <div className="product-short-description mt-2">{this.state.product.shortDescription}</div>
              <div className="button-container d-flex">
                <a href='#' className='btn btn-info mt-3' onClick={() => this.props.onAddCartItem(this.state.product)}>Add to Cart</a>
              </div>
            </div>
          </div>
          <div className="row p-4">
            <div className="product-long-description">
              {this.state.product.longDescription}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
