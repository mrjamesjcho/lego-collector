import React from 'react';

export default function Carousel(props) {
  const indicatorElements = [];
  const carouselElements = [];
  props.featured.map((product, index) => {
    indicatorElements.push(
      <li
        key={index}
        className={index === 0 ? 'active' : ''}
        data-target="#carouselCaptions"
        data-slide-to={index} ></li>
    );
    carouselElements.push(
      <div
        key={index}
        className={`carouselItem carousel-item ${index === 0 ? 'active' : ''}`} >
        <img src={product.images[0]} className="d-block w-100" alt={product.name} />
        <div className="carouselCaption carousel-caption d-none d-md-block">
          <h1>{product.name}</h1>
          <p>{product.shortDescription}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="carouselContainer container my-3">
      <div id="carouselCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {indicatorElements}
        </ol>
        <div className="carousel-inner">
          {carouselElements}
        </div>
        <a className="carousel-control-prev" href="#carouselCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
