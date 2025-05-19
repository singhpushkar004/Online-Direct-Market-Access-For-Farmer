import React from 'react';
import slider1 from "../assets/images/slider1.jpg"
import slider2 from "../assets/images/slider2.jpg"
import slider3 from "../assets/images/slider3.jpg"
const SliderSection = () => {
  return (
    <div id="sliderSection" className="container-fluid  p-0">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="ODMA Platform 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>ODMA: Connecting Farmers Directly to Consumers</h5>
              <p>Reducing intermediaries and boosting farmer incomes.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="ODMA Platform 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Global Reach for Local Produce</h5>
              <p>Expanding market access for farmers worldwide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="ODMA Platform 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Sustainable and Transparent Marketplace</h5>
              <p>Enhancing consumer trust through traceability and sustainability.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default SliderSection;
