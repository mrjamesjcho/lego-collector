import React from 'react';
import './styles/thumbnail-carousel.css';

export default class ThumbnailCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnails: props.thumbnails
    };
  }
  render() {
    const elements = [];
    this.state.thumbnails.map((imgUrl, index) => {
      const urlArr = imgUrl.split('/');
      elements.push(
        <div
          key={index}
          className="thumbnail d-flex align-items-center justify-content-center"
          onClick={() => this.props.onThumbnailClick(imgUrl)} >
          <img src={`/${urlArr[1]}/thumbnails/${urlArr[2]}`} />
        </div>
      );
    });
    return elements;
  }
}
