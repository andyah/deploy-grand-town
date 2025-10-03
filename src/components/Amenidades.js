// src/components/Amenidades.js
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Amenidades () {
    // Configuración de react-slick
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Cambia según tu diseño
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    }

    // Lista de imágenes (ajústalas a las rutas correctas en tu proyecto)
    const images = [
        "/static/galeriaimg10-9aa0b7d47c215b8c4a1ad91952445300.jpg",
        "/static/galeriaimg11-c0ae429ca3e0d420b61e1fe1c8af2ef1.jpg",
        "/static/GTC-047.jpg",
        "/static/galeriaimg13-62a85432ef826b5bb073f910d1281544.jpg",
        "/static/GTC-035.jpg",
        "/static/GTC-030.jpg",
        "/static/Correccion plantas-3.jpg",
        "/static/fiestaensalon.jpeg",
        "/static/GTC-005.jpg",
    ]

    return (
        <>
            <div id="amenidades" className="box__Box-sc-3l6bf7-0 style__Team-sc-1fzqs3z-0 eUkHKf cNgFcy">
                <div className="container">
                    <div className="justify-content-center row">
                        <div className="col-xxl-6 col-md-8 col-xs-10 col">
                            <div className="box__Box-sc-3l6bf7-0 style__Box-sc-1fzqs3z-4 kdbiMz text-center">
                                <div className="box__Box-sc-3l6bf7-0 style__SectionTitle-iwdkd7-0 kdbiMz">
                                    <div className="typography__Heading-fvecw2-0 style__Subtitle-iwdkd7-2 knBbjW jwujac">
                                        <span></span>
                                    </div>
                                    <h2 className="typography__Heading-fvecw2-0 style__Main-iwdkd7-3 knBbjW bvSJqm">
                                        <span>Amenidades</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* SLIDER */}
            <div className="box__Box-sc-3l6bf7-0 style__PortfolioDetails-sc-1bgqqro-0 eUkHKf">
                <div className="container">
                    <div className="justify-content-center justify-content-lg-start row">
                        <div className="col-xl-12 col-lg-6 col-md-10 col-10">
                            <div className="box__Box-sc-3l6bf7-0 style__SliderWrapper-sc-1bgqqro-6 irTdOh NJOQk">
                                <div className="testimonial-slider">
                                    <Slider {...settings}>
                                        {images.map((src, index) => (
                                            <div key={index} className="single-slide">
                                                <img src={src} alt={`slide-${index}`} style={{ height: "443px", width: "100%" }} />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="amenidades" className="box__Box-sc-3l6bf7-0 style__Team-sc-164k2lw-0 eUkHKf faVmwV">
                <div className="container">
                    <div className="justify-content-center row">
                        <div className="col-xxl-6 col-md-8 col-xs-10 col">
                            <div className="box__Box-sc-3l6bf7-0 style__Box-sc-164k2lw-4 kdbiMz text-center">
                                <div className="react-reveal">
                                    <div className="box__Box-sc-3l6bf7-0 style__SectionTitle-sc-1nsk1pj-0 kdbiMz">
                                        <div className="typography__Heading-fvecw2-0 style__Subtitle-sc-1nsk1pj-2 elZXOU jRtfYP">
                                            <span></span>
                                        </div>
                                        <h2 className="typography__Heading-fvecw2-0 style__Main-sc-1nsk1pj-3 eOWbLO iNSUsh">
                                            <span>
                                                ¡Juega, descansa, trabaja, haz deporte, estudia y
                                                diviértete sin salir de casa!
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center">
                                Disfruta con los amigos y la familia de estas increíbles
                                amenidades, cuyo diseño se inspiró en las actividades y forma de
                                vida que más te gustan. Todos encontrarán su espacio favorito.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="box__Box-sc-3l6bf7-0 style__Service-sc-1k3f33f-0 kdbiMz iUwmdd">
                <div className="container container">
                    <h2
                        className="typography__Heading-fvecw2-0 style__Main-sc-1nsk1pj-3 eOWbLO iNSUsh"
                        style={{ textAlign: "center" }}
                    >
                        <span>Más de 28 Amenidades</span>
                    </h2>
                    <p
                        className="typography__Paragraph-fvecw2-1 style__Text-sc-3gn3eb-1 dIgLCt fYhGAX"
                        style={{ textAlign: "center" }}
                    >
                        <span>Para disfrutar la vida cada día</span>
                    </p>

                    <div className="row justify-content-center row">
                        {/* Torre Centenario */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-xs-6 mt-5 col-6">
                            <div className="react-reveal">
                                <div
                                    data-aos="zoom-in"
                                    className="box__Box-sc-3l6bf7-0 style__Card-sc-13ugnrs-0 kdbiMz hBONfz"
                                >
                                    <div className="box__Box-sc-3l6bf7-0 style__Icon-sc-13ugnrs-1 kdbiMz eFBLmE card-icon">
                                        <img
                                            src="/static/logo-grand-a0eddf9d5c9cbb5725d8507663edbb22.jpeg"
                                            className="logo-grand"
                                            alt="Torre Centenario"
                                        />
                                    </div>
                                    <h3 className="typography__Heading-fvecw2-0 style__Title-sc-13ugnrs-2 knBbjW cpqRbY">
                                        Torre Centenario
                                    </h3>
                                    <p className="typography__Paragraph-fvecw2-1 style__Text-sc-13ugnrs-3 dIgLCt lkKpWA">
                                        <span>
                                            Salón de fiestas <br />
                                            Salón inglés
                                            <br />
                                            Dos Salones lounge
                                            <br />
                                            Cine <br />
                                            Rooftop con asadores, fogateros
                                            <br />
                                            Sky Lounge <br />
                                            Sky Yoga
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Torre Park */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-xs-6 mt-5 col-6">
                            <div className="react-reveal">
                                <div
                                    data-aos="zoom-in"
                                    className="box__Box-sc-3l6bf7-0 style__Card-sc-13ugnrs-0 kdbiMz hBONfz"
                                >
                                    <div className="box__Box-sc-3l6bf7-0 style__Icon-sc-13ugnrs-1 kdbiMz eFBLmE card-icon">
                                        <img
                                            src="/static/logo-grand-a0eddf9d5c9cbb5725d8507663edbb22.jpeg"
                                            className="logo-grand"
                                            alt="Torre Park"
                                        />
                                    </div>
                                    <h3 className="typography__Heading-fvecw2-0 style__Title-sc-13ugnrs-2 knBbjW cpqRbY">
                                        Torre Park
                                    </h3>
                                    <p className="typography__Paragraph-fvecw2-1 style__Text-sc-13ugnrs-3 dIgLCt lkKpWA">
                                        <span>
                                            Gym <br />
                                            Spinning
                                            <br />
                                            CrossFit
                                            <br />
                                            Yoga <br />
                                            Vestidores <br />
                                            Vapor/Sauna <br />
                                            Alberca semiolímpica <br />
                                            Alberca recreativa <br />
                                            Rooftop con asadores, fogateros y horno de pizza
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Torre City */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-xs-6 mt-5 col-6">
                            <div className="react-reveal">
                                <div
                                    data-aos="zoom-in"
                                    className="box__Box-sc-3l6bf7-0 style__Card-sc-13ugnrs-0 kdbiMz hBONfz"
                                >
                                    <div className="box__Box-sc-3l6bf7-0 style__Icon-sc-13ugnrs-1 kdbiMz eFBLmE card-icon">
                                        <img
                                            src="/static/logo-grand-a0eddf9d5c9cbb5725d8507663edbb22.jpeg"
                                            className="logo-grand"
                                            alt="Torre City"
                                        />
                                    </div>
                                    <h3 className="typography__Heading-fvecw2-0 style__Title-sc-13ugnrs-2 knBbjW cpqRbY">
                                        Torre City
                                    </h3>
                                    <p className="typography__Paragraph-fvecw2-1 style__Text-sc-13ugnrs-3 dIgLCt lkKpWA">
                                        <span>
                                            Boliche <br />
                                            Music Hall <br />
                                            Ludoteca y salón de fiestas infantiles <br />
                                            Teens Club <br />
                                            Arcade
                                            <br />
                                            Lobby Principal <br />
                                            Oficinas privadas <br />
                                            Cafetería <br />
                                            Sky Lounge
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Exteriores */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-xs-6 mt-5 col-6">
                            <div className="react-reveal">
                                <div
                                    data-aos="zoom-in"
                                    className="box__Box-sc-3l6bf7-0 style__Card-sc-13ugnrs-0 kdbiMz hBONfz"
                                >
                                    <div className="box__Box-sc-3l6bf7-0 style__Icon-sc-13ugnrs-1 kdbiMz eFBLmE card-icon">
                                        <img
                                            src="/static/logo-grand-a0eddf9d5c9cbb5725d8507663edbb22.jpeg"
                                            className="logo-grand"
                                            alt="Exteriores"
                                        />
                                    </div>
                                    <h3 className="typography__Heading-fvecw2-0 style__Title-sc-13ugnrs-2 knBbjW cpqRbY">
                                        Exteriores
                                    </h3>
                                    <p className="typography__Paragraph-fvecw2-1 style__Text-sc-13ugnrs-3 dIgLCt lkKpWA">
                                        <span>
                                            Lago y cascada <br />
                                            4,120m² de jardines <br />
                                            Paddle tennis <br />
                                            Crossfit Exterior <br />
                                            Juegos infantiles <br />
                                            Canasta de basket <br />
                                            Área de mascotas <br />
                                            Circuito infantil <br />
                                            Golfito
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sky Park */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-xs-6 mt-5 col-6">
                            <div className="react-reveal">
                                <div
                                    data-aos="zoom-in"
                                    className="box__Box-sc-3l6bf7-0 style__Card-sc-13ugnrs-0 kdbiMz hBONfz"
                                >
                                    <div className="box__Box-sc-3l6bf7-0 style__Icon-sc-13ugnrs-1 kdbiMz eFBLmE card-icon">
                                        <img
                                            src="/static/logo-grand-a0eddf9d5c9cbb5725d8507663edbb22.jpeg"
                                            className="logo-grand"
                                            alt="Sky Park"
                                        />
                                    </div>
                                    <h3 className="typography__Heading-fvecw2-0 style__Title-sc-13ugnrs-2 knBbjW cpqRbY">
                                        Sky Park
                                    </h3>
                                    <p className="typography__Paragraph-fvecw2-1 style__Text-sc-13ugnrs-3 dIgLCt lkKpWA">
                                        <span>
                                            Asadores <br />
                                            Fogateros
                                            <br />
                                            Sky lounge <br />
                                            Sky Yoga <br />
                                            Horno para pizza
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}