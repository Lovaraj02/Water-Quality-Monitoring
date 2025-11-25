import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const tips = [
    "Fix leaking taps and pipes.",
    "Use water filters certified to remove specific contaminants.",
    "Store water in clean, sealed containers away from chemicals.",
    "Stay updated on local water quality reports and advisories.",
    "Boil water before drinking or cooking to kill harmful pathogens.",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-page">
      <div className={`home-container ${showContent ? "visible" : ""}`}>
        <h1 className="home-title">Water Quality Monitoring</h1>

        <p className="home-info">
          We're here to help you make a difference. Whether it's reporting a
          leak or learning how to conserve water, our platform is designed to
          empower you to take action.
        </p>

        <div className="home-buttons">
          <Link to="/complaint" className="home-btn-link">
            <button className="home-btn">Raise a Complaint</button>
          </Link>
        </div>

        <div className="home-slider">
          <Slider {...settings}>
            {tips.map((tip, index) => (
              <div key={index} className="home-slide">
                {tip}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Home;
