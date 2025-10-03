import React, { useEffect, useState } from "react";

const imageEstudio = "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAZABQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAQFAQID/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAaGpJpXIwek59eXDgP/EABsQAAICAwEAAAAAAAAAAAAAAAECADEDERIh/9oACAEBAAEFAuhOpuZFRTtiPZkJZYtNZuf/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAdEAACAQQDAAAAAAAAAAAAAAABEQADECExUaHB/9oACAEBAAY/Akw+Lmqdx+zfcyXM2F//xAAdEAADAQABBQAAAAAAAAAAAAAAASERMRBRYXGB/9oACAEBAAE/IbuRaprsWbgJViZNPVicFFgPW4MSiNeSfroOcR//2gAMAwEAAgADAAAAEAzgvP/EABYRAQEBAAAAAAAAAAAAAAAAACEAEP/aAAgBAwEBPxBnf//EABcRAQEBAQAAAAAAAAAAAAAAAAEAETH/2gAIAQIBAT8Q0O2kll//xAAhEAEAAgIBAwUAAAAAAAAAAAABABEhMXEQQbFRYZGhwf/aAAgBAQABPxBESFoYcStb7ZXL1jDZKGrqjEoGtYsS949oJWBv4/Ub5PNcDgP2CVF2DEpi7TY7nheOm1eZ/9k=";

const images = [
    ]

function Estudios() {

    // Hook que reemplaza el script 
    const [Slider, setSlider] = useState(null);

    useEffect(() => {
        // Carga react-slick solo cuando window existe
        if (typeof window !== "undefined") {
        import("react-slick").then((mod) => {
            setSlider(() => mod.default);
        });
        }
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <>
            <div id="oficinas" classNameName="box__Box-sc-3l6bf7-0 style__Content-sc-1frwe0k-0 kdbiMz">
                <div className="container">
                    <div className="box__Box-sc-3l6bf7-0 style__InnerWrapper-sc-1frwe0k-1 kdbiMz bsgayl">
                        <div className="align-items-center justify-content-center row">
                            <div className="col-lg-4 col-md-8 col-xs-11 text-center text-lg-start col-12">
                                <div className="react-reveal">
                                    <div className="box__Box-sc-3l6bf7-0 style__SectionTitle-ci49dy-0 kdbiMz">
                                        <div className="typography__Heading-fvecw2-0 style__Subtitle-ci49dy-2 eGAisZ yplpo"><span></span></div>
                                        <h2 className="typography__Heading-fvecw2-0 style__Main-ci49dy-3 jxEbVJ dTHSti">
                                            <span>
                                                Estudios Privados
                                            </span>
                                        </h2>
                                        <p className="typography__Paragraph-fvecw2-1 style__Text-ci49dy-1 dIgLCt cvNQIO">
                                            <span>
                                                Un espacio para trabajar sin interrupciones y al que llegarás caminando en dos minutos
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <p className="react-reveal">
                                    En Grand Tower Centenario ofrecemos oficinas privadas en venta. Olvídate del tráfico, y aumenta
                                    tu productividad y calidad de vida al tener todo lo que necesitas para tu trabajo a unos pasos
                                    de tu casa. ¡Todo en un mismo lugar!
                                </p>
                            </div>
                            {/* Columna imagen */}
                            <div className="col-xl-5 col-lg-4 col-md-6 col-xs-9 col-12">
                            {Slider ? (
                                <Slider {...sliderSettings}>
                                <div>
                                    <img src={imageEstudio} alt="Oficina 1" />
                                </div>
                                <div>
                                    <img
                                    src="/static/37e0ea19c82050d0e8a63c063f357f78/cedfa/oficina1.jpg"
                                    alt="Oficina 2"
                                    />
                                </div>
                                </Slider>
                            ) : (
                                <img src={imageEstudio} alt="Oficina estática" />
                            )}
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-xs-10 order-3   col-12">
                                <div className="react-reveal">
                                    <div className="box__Box-sc-3l6bf7-0 style__WidgetsWrapper-sc-1frwe0k-2 kdbiMz iNPvIr">
                                        <div className="box__Box-sc-3l6bf7-0 style__Widget-sc-1frwe0k-3 gIEjfK">
                                            <div className="typography__Heading-fvecw2-0 style__WidgetTitle-sc-1frwe0k-4 knBbjW cFMJFt">
                                                Características de las oficinas</div>
                                            <p className="typography__Paragraph-fvecw2-1 style__WidgetText-sc-1frwe0k-5 dIgLCt loOvkB">Desde
                                                21m²</p>
                                            <ul>
                                                <li>Acceso controlado</li>
                                                <li>Seguridad</li>
                                                <li>Gym con regadreas y baños</li>
                                                <li>Coffee Station</li>
                                                <li>Centro de copiado</li>
                                                <li>Sala de Juntas</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Estudios;