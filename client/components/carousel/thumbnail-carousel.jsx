import React from 'react';
import '../styles/thumbnail-carousel.css';

export default class ThumbnailCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.scrollOffset = 59;
    this.maxThumbnailHeight = 354;
    this.state = {
      thumbnails: props.thumbnails,
      thumbnailsOffset: 0,
      maxOffset: this.maxThumbnailHeight - props.thumbnails.length * this.scrollOffset
    };
    this.handleThumbnailNavClick = this.handleThumbnailNavClick.bind(this);
  }
  handleThumbnailNavClick(e) {
    const currentOffset = this.state.thumbnailsOffset;
    if (currentOffset === 0 && parseInt(e.target.dataset.tnav) === 1) {
      return;
    }
    if (currentOffset === this.state.maxOffset && parseInt(e.target.dataset.tnav) === -1) {
      return;
    }
    const newOffset = currentOffset + parseInt(e.target.dataset.tnav) * this.scrollOffset;
    this.setState({ thumbnailsOffset: newOffset });
  }
  renderThumbnails() {
    const elements = [];
    this.state.thumbnails.map((imgUrl, index) => {
      elements.push(
        <div
          key={index}
          className={`thumbnail d-flex justify-content-center align-items-center border ${imgUrl === this.props.imgSelected ? 'border-primary' : ''} overflow-hidden`}
          onClick={() => this.props.onThumbnailClick(imgUrl)} >
          <img src={`/images/thumbnails/${imgUrl}`} />
        </div>
      );
    });
    return elements;
  }
  render() {
    const thumbnailNav = this.state.thumbnails.length > 5;
    const offsetStyle = { transform: `translateY(${this.state.thumbnailsOffset}px)` };
    return (
      <div className="thumbnailControlsContainer d-flex flex-column align-self-start h-100">
        {thumbnailNav
          ? <h4
            className="thumbnailPrev text-primary d-flex justify-content-center align-items-center w-50 my-0 mx-auto"
            data-tnav={1}
            onClick={this.handleThumbnailNavClick} >
            &and;
          </h4>
          : null}
        <div className={`thumbnailContainer ${thumbnailNav ? 'thumbnailNav' : ''} overflow-hidden`}>
          <div
            className="thumbnailScrollable d-flex flex-column"
            style={offsetStyle} >
            {this.renderThumbnails()}
          </div>
        </div>
        {thumbnailNav
          ? <h4
            className="thumbnailNext text-primary d-flex justify-content-center align-items-center w-50 my-0 mx-auto"
            data-tnav={-1}
            onClick={this.handleThumbnailNavClick} >
              &or;
          </h4>
          : null}
      </div>
    );
  }
}
