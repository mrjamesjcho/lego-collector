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
      <div className="thumbnailContainer h-100 d-flex flex-column align-self-start overflow-hidden">
        {this.renderThumbnails()}
      </div>
    );
  }
}
