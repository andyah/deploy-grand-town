import React from "react";

const Footer = () => {
    return (
        <>
            <div id="footer" classNameName="box__Box-sc-3l6bf7-0 style__Footer-sc-13f7rrl-0 kdbiMz ETfrT">
                <div className="container">
                    <div className="box__Box-sc-3l6bf7-0 style__Box-sc-13f7rrl-14 jSuCSf">
                        <div className="justify-content-center row">
                            <div className="col-lg-4 col-md-10 col-xs-10 col-10">
                                <div className="box__Box-sc-3l6bf7-0 style__Widgets-sc-13f7rrl-1 kdbiMz footer-widgets footer-widgets--l7">
                                    <div className="box__Box-sc-3l6bf7-0 style__Box-sc-13f7rrl-14 bbRAuk logo-footer"><a href="/#"><img
                                        src="data:image/png;base64,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"
                                        alt="logo" /></a></div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6 col-xs-6 col-10">
                                <div className="box__Box-sc-3l6bf7-0 style__Widgets-sc-13f7rrl-1 kdbiMz">
                                    <div className="typography__Heading-fvecw2-0 style__Title-sc-13f7rrl-4 knBbjW jtRPCq">Contacto</div>
                                    <ul
                                        className="box__Box-sc-3l6bf7-0 style__Address-sc-13f7rrl-6 kdbiMz iGVbcm widgets-address list-unstyled">
                                        <li className="box__Box-sc-3l6bf7-0 style__AddressItem-sc-13f7rrl-7 kdbiMz iIjDPS list-items"><i
                                            className="fa fa-map-marker-alt"></i><span className="address">Dirección:</span><span>Prol. 5 de Mayo
                                                3121,<br /> Col Ex-Hacienda de Tarango,<br /> Álvaro Obregón, CDMX</span></li>
                                        <li className="box__Box-sc-3l6bf7-0 style__AddressItem-sc-13f7rrl-7 kdbiMz iIjDPS list-items"><i
                                            className="fab fa-whatsapp"></i><span>Whatsapp: <br className="d-block" /></span>
                                            <div><a href="tel:5554068105" className="ms-3">55 5406 8105</a><br /><a href="tel:5554068958"
                                                className="ms-3">55 5406 8958</a></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 offset-xs-1 col-xs-5 col-10">
                                <div className="row">
                                    <div className="col-md-4 col-xs-6 col-6">
                                        <div className="box__Box-sc-3l6bf7-0 style__Widgets-sc-13f7rrl-1 kdbiMz">
                                            <div className="typography__Heading-fvecw2-0 style__Title-sc-13f7rrl-4 knBbjW jtRPCq">Menu</div>
                                            <ul
                                                className="box__Box-sc-3l6bf7-0 style__List-sc-13f7rrl-8 kdbiMz htqXyU widgets-list list-unstyled">
                                                <li className="box__Box-sc-3l6bf7-0 style__ListItems-sc-13f7rrl-9 kdbiMz jcrujf list-items"><a
                                                    href="#proyecto">Proyecto</a></li>
                                                <li className="box__Box-sc-3l6bf7-0 style__ListItems-sc-13f7rrl-9 kdbiMz jcrujf list-items"><a
                                                    href="#departamentos">Departamentos</a></li>
                                                <li className="box__Box-sc-3l6bf7-0 style__ListItems-sc-13f7rrl-9 kdbiMz jcrujf list-items"><a
                                                    href="#amenidades">Amenidades</a></li>
                                                <li className="box__Box-sc-3l6bf7-0 style__ListItems-sc-13f7rrl-9 kdbiMz jcrujf list-items"><a
                                                    href="#oficinas">Oficinas</a></li>
                                                <li className="box__Box-sc-3l6bf7-0 style__ListItems-sc-13f7rrl-9 kdbiMz jcrujf list-items"><a
                                                    href="#contacto">Contacto</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="justify-content-center row">
                        <div className="col-lg-12 col-xl-12 col-md-10 col-xs-10 col-10">
                            <p className="typography__Paragraph-fvecw2-1 style__Text-sc-13f7rrl-5 itQMoM iBwawu">
                                Los proyectos, diseños, superficies, decorados, plantas tipo, imágenes y todo lo que se muestra podrían
                                sufrir modificaciones sin previo aviso. No contribuye un compromiso, obligación u oferta comercial
                                alguna.
                            </p>
                            <div className="box__Box-sc-3l6bf7-0 style__Copyright-sc-13f7rrl-12 kdbiMz hrfpZw">
                                <div className="box__Box-sc-3l6bf7-0 style__CopyrightText-sc-13f7rrl-13 kdbiMz khwCSU">© 2021 Grand Tower
                                    Centenario | Todos los derechos reservados <a className="aviso" href="/aviso">Aviso de
                                        privacidad</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer();