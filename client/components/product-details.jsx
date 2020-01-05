import React from 'react';
import { Link } from 'react-router-dom';
import ThumbnailCarousel from './thumbnail-carousel';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      product: null,
      imgSelected: null
    };
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
  }
  getProducts(id) {
    fetch('/api/products.php?id=' + id)
      .then(response => response.json())
      .then(data => {
        this.setState({ product: data[0], imgSelected: data[0].images[0] });
      });
  }
  componentDidMount() {
    this.getProducts(this.props.match.params.id);
  }
  handleThumbnailClick(imgUrl) {
    this.setState({ imgSelected: imgUrl });
  }
  render() {
    if (this.state.product) {
      return (
        <div className='productDetailsContainer container'>
          <Link to='/products' className='continueShoppingLink' >
            &lt; <span className="continueShopping">continue shopping</span>
          </Link>
          <div className="productDetailsImgInfoContainer d-flex">
            <div className="productDetailsImageContainer col-7 d-flex align-items-center h-100 ">
              <div className="thumbnailContainer d-flex flex-column align-self-start">
                <ThumbnailCarousel
                  thumbnails={this.state.product.images}
                  onThumbnailClick={this.handleThumbnailClick} />
              </div>
              <div className="productDetailsImgContainer d-flex justify-content-center align-items-center flex-fill h-100">
                <img src={this.state.imgSelected} className="item-image rounded m-auto p-2" />
              </div>
            </div>
            <div className="productDetailsInfoContainer col-5 d-flex-column">
              <h1 className="productName">{this.state.product.name}</h1>
              <h3 className="price">{'$' + (this.state.product.price / 100)}</h3>
              <div className="productShortDescription mt-2">{this.state.product.shortDescription}</div>
              <div className="buttonContainer d-flex">
                <a href='#' className='addToCartBtn btn btn-warning mt-3' onClick={() => this.props.onAddCartItem(this.state.product)}>Add to Cart</a>
              </div>
            </div>
          </div>
          <div className="px-2 my-4">
            <div className="productLongDescription">
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
