import React from 'react';

export default function Carousel(props) {
  return (
    <div className="carouselContainer container my-2">
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carouselItem carousel-item active">
            <img src="/images/1989-batmobile-1.jpeg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h3>1989 Batmobie</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className="carouselItem carousel-item">
            <img src="/images/bugatti-1.jpeg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h3>Bugatti Chiron</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="carouselItem carousel-item">
            <img src="/images/millennium-falcon-1.jpeg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h3>Millenium Falcon</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
