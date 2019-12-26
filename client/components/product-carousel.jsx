import React from 'react';

export default class ProductCarousel extends React.Component {
  render() {
    return (
      <div id="featuredItems" className="featuredItems container carousel slide mb-3" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#featuredItems" data-slide-to="0" className="active"></li>
          <li data-target="#featuredItems" data-slide-to="1"></li>
          <li data-target="#featuredItems" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="carouselImage d-block w-100" src="images/imperial-star-destroyer-1.jpeg" alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="carouselImage d-block w-100" src="images/millennium-falcon-1.jpeg" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="carouselImage d-block w-100" src="images/voltron-1.jpeg" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#featuredItems" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#featuredItems" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
