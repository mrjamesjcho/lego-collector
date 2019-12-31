import React from 'react';
import { Link } from 'react-router-dom';

export default class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    // if (event.target.id === 'quick-look-button') {
    //   this.props.onClick('catalog', { item: this.props.item });
    // } else {
    //   this.props.onClick('details', { id: this.props.id });
    // }
  }
  render() {
    return (
      <Link to={`/product/${this.props.id}`} className="col-lg-3 col-md-4 col-sm-6 col-xs p-1 card-container">
        <div className="item-card card border-0 h-100" onClick={this.handleClick}>
          <div className="details-button-container display-none position-absolute justify-content-center align-items-center h-100 w-100">
            <button className="quick-look-button btn btn-secondary" id="quick-look-button" type="button" onClick={this.handleClickQuickLook}>Quick look</button>
          </div>
          <div className="item-image-container d-flex h-50">
            <img src={this.props.itemImages[0]} className="card-img-top item-image rounded m-auto p-2 h-100" />
          </div>
          <div className="card-body d-flex-column item-info-container h-50 p-2">
            <h5 className="card-title item-name mb-2">{this.props.itemName}</h5>
            <div className="card-text item-price-container d-flex mb-1">
              <h4 className="itemPrice mb-0">{'$' + (Math.floor(this.props.itemPrice / 100))}</h4>
              <h6 className="mb-0">{this.props.itemPrice.toString().slice(-2)}</h6>
            </div>
            <div className="card-text item-description">{this.props.itemDescription}</div>
          </div>
        </div>
      </Link>
    );
  }
}
