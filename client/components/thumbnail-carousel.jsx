import React from 'react';
import './styles/thumbnail-carousel.css';

export default class ThumbnailCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnails: props.thumbnails
    };
  }
  renderThumbnails() {
    const elements = [];
    this.state.thumbnails.map((imgUrl, index) => {
      const urlArr = imgUrl.split('/');
      elements.push(
        <div
          key={index}
          className={`thumbnail d-flex justify-content-center align-items-center border ${imgUrl === this.props.imgSelected ? 'border-info' : ''} overflow-hidden`}
          onClick={() => this.props.onThumbnailClick(imgUrl)} >
          <img src={`/${urlArr[1]}/thumbnails/${urlArr[2]}`} />
        </div>
      );
    });
    return elements;
  }
  render() {
    return (
      <div className="thumbnailControlsContainer d-flex flex-column align-self-start">
        <h4 className="thumbnailPrev text-info d-flex justify-content-center w-50 my-0 mx-auto">
          &and;
        </h4>
        <div className="thumbnailContainer h-100 d-flex flex-column overflow-hidden">
          {this.renderThumbnails()}
        </div>
        <h4 className="thumbnailNext text-info d-flex justify-content-center w-50 my-0 mx-auto">
          &or;
        </h4>
      </div>
    );
  }
}
