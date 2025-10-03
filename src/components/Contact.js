import React from "react";

export default function Contact() {
  return (
    <>
      <div className="box__Box-sc-3l6bf7-0 style__Contact-sc-1gltwbs-0 kdbiMz cZeuRh">
        <div className="container">
          <div className="justify-content-center text-center row">
            <h2
              className="typography__Heading-fvecw2-0 style__Main-sc-1nsk1pj-3 eOWbLO iNSUsh"
              style={{ textAlign: "center" }}
            >
              <span>Contáctanos</span>
            </h2>
            <div className="col-lg-12 col-xl-12 mb-7 mb-lg-0 col-md-10 col-10">
              <div className="box__Box-sc-3l6bf7-0 style__Form-sc-1ixwnv0-0 gsZrfO iVaMwk text-start">
                <div id="contacto"></div>
                <div className="row">
                  <div className="col-xl-8 col-lg-8 col-md-6 col-xs-12 col">
                    <p className="react-reveal form-whatsapp">¿Tienes alguna duda?</p>
                    <h3 className="react-reveal form-title">Escríbenos</h3>
                    <div className="react-reveal contact-form">
                      <form
                        name="contact"
                        method="post"
                        data-netlify="true"
                        action="/mail"
                        data-netlify-honeypot="bot-field"
                      >
                        <input type="hidden" name="form-name" value="contact" />
                        <p hidden>
                          <label>
                            Don’t fill this out: <input name="bot-field" />
                          </label>
                        </p>
                        <div className="row">
                          <div className="col-lg-4 mb-4">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Your Website"
                                id="floatinginput3"
                                name="nombre"
                              />
                              <label htmlFor="floatinginput3">Nombre</label>
                            </div>
                          </div>
                          <div className="col-lg-4 mb-4">
                            <div className="form-floating">
                              <input
                                type="email"
                                className="form-control"
                                id="floatinginput"
                                name="email"
                              />
                              <label htmlFor="floatinginput">
                                Correo Electrónico*
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-4 mb-4">
                            <div className="form-floating">
                              <input
                                type="number"
                                className="form-control"
                                id="floatinginput2"
                                name="teléfono"
                              />
                              <label htmlFor="floatinginput2">Teléfono</label>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-floating">
                              <textarea
                                className="form-control"
                                id="floatingTextarea"
                                style={{ height: "100px" }}
                                name="mensaje"
                                type="text"
                              />
                              <label htmlFor="floatingTextarea">
                                ¿Tienes alguna pregunta?
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="row align-items-center mt-3 flex-column">
                              <div className="col-md-4 col-lg-5 col-xl-4 text-center pt-3">
                                <button
                                  type="submit"
                                  className="btn btn--lg-2 shadow--torch-red-3 rounded-55 boton-enviar"
                                >
                                  Enviar
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div
                    data-aos="fade-left"
                    className="col-xl-4 col-lg-4 col-md-6 col-xs-12 margen-up col-12"
                  >
                    <div className="react-reveal contactanos">
                      <h3>Contáctanos</h3>
                      <p>Para nosotros es muy importante tu opinión, escríbenos.</p>
                      <hr />
                      <div className="costado">
                        <i className="fas fa-map-marker-alt mapa"></i>
                        <div>
                          <h6>Visitanos en:</h6>
                          <p>
                            Prol. 5 de Mayo 3121 Col Ex-Hacienda de Tarango, Álvaro
                            Obregón, CDMX
                          </p>
                        </div>
                      </div>
                      <div className="costado">
                        <i className="fas fa-phone-alt"></i>
                        <div>
                          <h6>Nuestros teléfonos:</h6>
                          <a href="tel:5554068105">55 · 5406 8105</a>
                          <br />
                          <a href="tel:5554068958">55 · 5406 8958</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Contact Info */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}