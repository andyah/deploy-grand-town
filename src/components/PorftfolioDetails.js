// src/components/PortfolioDetails.jsx
import React from "react"
import Slider from "react-slick"

// estilos de slick
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function PortfolioDetails() {
  const images = [
    "/static/avance1.jpeg",
    "/static/avance2.jpeg",
    "/static/avance3.jpeg",
    "/static/avance4.jpeg",
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Cambia según tu diseño
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="box__Box-sc-3l6bf7-0 style__PortfolioDetails-sc-1bgqqro-0 eUkHKf">
      <div className="container">
        <div className="justify-content-center justify-content-lg-start row">
          <div className="col-xl-12 col-lg-6 col-md-10 col-10">
            <div className="box__Box-sc-3l6bf7-0 style__SliderWrapper-sc-1bgqqro-6 irTdOh NJOQk">
              <Slider {...settings}>
                {images.map((src, idx) => (
                  <div
                    key={idx}
                    className="box__Box-sc-3l6bf7-0 style__Slide-sc-1bgqqro-7 kdbiMz single-slide"
                  >
                    <div>
                      <img src={src} alt={`avance-${idx + 1}`} style={{ height: "443px" }} />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

