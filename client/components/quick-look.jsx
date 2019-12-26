import React from 'react';

export default class QuickLook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      imageScrollOffset: 0
    };
    this.thumbnailWidthPx = 80;
    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleClickDetails = this.handleClickDetails.bind(this);
    this.handleClickImageOption = this.handleClickImageOption.bind(this);
    this.handleClickScroll = this.handleClickScroll.bind(this);
  }
  handleClickClose() {
    this.props.onViewChange('catalog', {});
  }
  handleClickDetails() {
    this.props.onViewChange('details', { id: this.props.item.id });
  }
  handleClickImageOption(event) {
    this.setState({ imageIndex: parseInt(event.target.id) });
  }
  handleClickScroll(event) {
    if (event.target.id === 'leftClick' && this.state.imageScrollOffset > 0) {
      this.setState({
        imageIndex: this.state.imageIndex,
        imageScrollOffset: this.state.imageScrollOffset - 1
      });
    } else if (event.target.id === 'rightClick') {
      this.setState({
        imageIndex: this.state.imageIndex,
        imageScrollOffset: this.state.imageScrollOffset + 1
      });
    }
  }
  render() {
    const imageElements = this.props.item.images.map((image, index) => {
      return (
        <div key={index} id={index} className="quick-look-image-option item-thumbnail h-100" onClick={this.handleClickImageOption}>
          <img id={index} className="item-image h-100 w-100" src={this.props.item.images[index]} alt={this.props.item.name} />
        </div>
      );
    });
    const thumbnailScrollOffsetCSS = { transform: `translateX(${this.state.imageScrollOffset * (-this.thumbnailWidthPx)}px)` };
    return (
      <div className="quick-look-modal-container fixed-top h-100 w-100 d-flex justify-content-center align-items-center"
        id="quick-look-modal-background">
        <div className="quick-look-modal container h-50 w-75 p-2 d-flex flex-column rounded">
          <div className="quick-look-modal-close d-flex justify-content-end">
            <i className="modal-close-button fas fa-times p-2" onClick={this.handleClickClose}></i>
          </div>
          <div className="quick-look-modal-info-container d-flex h-100 w-100 px-3 pb-3">
            <div className="quick-look-modal-image-container d-flex justify-content-center h-100 w-50">
              <img className="item-image h-100 w-100" src={this.props.item.images[this.state.imageIndex]} alt={this.props.item.name}/>
            </div>
            <div className="quick-look-modal-name-price-info-detailsbutton-container d-flex flex-column w-50 pl-3">
              <h4 className="quick-look-modal-name">{this.props.item.name}</h4>
              <h5 className="quick-look-modal-price">{'$' + (this.props.item.price / 100)}</h5>
              <div className="quick-look-modal-description mb-3">{this.props.item.shortDescription}</div>
              <div className="quick-look-details-button-container d-flex justify-content-center">
                <button type="button" className="btn btn-secondary" onClick={this.handleClickDetails}>
                  View product details
                </button>
              </div>
              <div className="quick-look-thumbnail-container container d-flex h-25 mt-auto p-0">
                <a className="next-thumbnail d-flex justify-content-center align-items-center" id="leftClick" onClick={this.handleClickScroll}>&#10094;</a>
                <div className="quick-look-thumbnail-row row h-100 m-auto">
                  <div className="thumbnail-container h-100" style={thumbnailScrollOffsetCSS}>
                    {imageElements}
                  </div>
                </div>
                <a className="prev-thumbnail d-flex justify-content-center align-items-center" id="rightClick" onClick={this.handleClickScroll}>&#10095;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
