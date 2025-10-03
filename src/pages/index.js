import React from "react"
import PortfolioDetails from "../components/PorftfolioDetails"
import Contact from "../components/Contact"
import ImageSection from "../components/PoyectoImage"
import Amenidades from "../components/Amenidades"
import Estudios from "../components/Estudios"

const img1 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2YpIj4KPHBhdGggZD0iTTkuMzM2ODQgMjMuNjU5N0w5LjcxOTU0IDIzLjg4NkMxMS4zMjY4IDI0LjgzODEgMTMuMTY5NSAyNS4zNDE1IDE1LjA0ODggMjUuMzQyNUgxNS4wNTI4QzIwLjgyNCAyNS4zNDI1IDI1LjUyMDkgMjAuNjU1NyAyNS41MjMzIDE0Ljg5NTFDMjUuNTI0MyAxMi4xMDM2IDI0LjQzNjMgOS40Nzg1NCAyMi40NTkzIDcuNTAzOTRDMjAuNDgyMyA1LjUyOTM0IDE3Ljg1MzcgNC40NDEzNiAxNS4wNTY4IDQuNDQwMThDOS4yODExNSA0LjQ0MDE4IDQuNTg0MjIgOS4xMjY0OCA0LjU4MjEgMTQuODg2NkM0LjU4MTI0IDE2Ljg2MDUgNS4xMzQ2OCAxOC43ODMxIDYuMTgyNzQgMjAuNDQ2Nkw2LjQzMTkgMjAuODQxOEw1LjM3MzkzIDI0LjY5NjhMOS4zMzY4NCAyMy42NTk3Wk0yLjM0OTM3IDI3LjY4M0w0LjEzNjY0IDIxLjE2OThDMy4wMzQzMSAxOS4yNjM3IDIuNDU0MzYgMTcuMTAxMiAyLjQ1NTA3IDE0Ljg4NTlDMi40NTc4OSA3Ljk1NTM4IDguMTA4NzUgMi4zMTY5OSAxNS4wNTI4IDIuMzE2OTlDMTguNDIyNiAyLjMxODYzIDIxLjU4NTQgMy42Mjc1IDIzLjk2NDIgNi4wMDMzOEMyNi4zNDIyIDguMzc5MjYgMjcuNjUxNyAxMS41MzcyIDI3LjY1MDUgMTQuODk2QzI3LjY0NzUgMjEuODI2MSAyMS45OTU3IDI3LjQ2NTQgMTUuMDUyOCAyNy40NjU0QzE1LjA1MjMgMjcuNDY1NCAxNS4wNTMzIDI3LjQ2NTQgMTUuMDUyOCAyNy40NjU0SDE1LjA0NzRDMTIuOTM5MiAyNy40NjQ2IDEwLjg2NzYgMjYuOTM2OCA5LjAyNzUxIDI1LjkzNTJMMi4zNDkzNyAyNy42ODNaIiBmaWxsPSIjQjNCM0IzIi8+CjwvZz4KPHBhdGggZD0iTTIuMjE5OTcgMjcuNTUzOEw0LjAwNzI0IDIxLjA0MDZDMi45MDQ5MiAxOS4xMzQ1IDIuMzI0OTcgMTYuOTcyIDIuMzI1NjcgMTQuNzU2N0MyLjMyODUgNy44MjYxNyA3Ljk3OTM2IDIuMTg3NzcgMTQuOTIzNCAyLjE4Nzc3QzE4LjI5MzIgMi4xODk0MiAyMS40NTYgMy40OTgyOSAyMy44MzQ4IDUuODc0MTdDMjYuMjEyOCA4LjI1MDA1IDI3LjUyMjMgMTEuNDA4IDI3LjUyMTIgMTQuNzY2OEMyNy41MTgxIDIxLjY5NjkgMjEuODY2MyAyNy4zMzYyIDE0LjkyMzQgMjcuMzM2MkMxNC45MjI5IDI3LjMzNjIgMTQuOTIzOSAyNy4zMzYyIDE0LjkyMzQgMjcuMzM2MkgxNC45MThDMTIuODA5OCAyNy4zMzU0IDEwLjczODIgMjYuODA3NiA4Ljg5ODEyIDI1LjgwNkwyLjIxOTk3IDI3LjU1MzhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTQuOTI3NSA0LjMxMUM5LjE1MTg0IDQuMzExIDQuNDU0ODggOC45OTcyNyA0LjQ1Mjc2IDE0Ljc1NzRDNC40NTE5IDE2LjczMTMgNS4wMDUzNyAxOC42NTM5IDYuMDUzNDMgMjAuMzE3NEw2LjMwMjU5IDIwLjcxMjZMNS4yNDQ1NiAyNC41Njc2TDkuMjA3NTIgMjMuNTMwNEw5LjU5MDE5IDIzLjc1NjhDMTEuMTk3NCAyNC43MDg5IDEzLjA0MDIgMjUuMjEyMyAxNC45MTk0IDI1LjIxMzNIMTQuOTIzNEMyMC42OTQ2IDI1LjIxMzMgMjUuMzkxNiAyMC41MjY1IDI1LjM5MzkgMTQuNzY1OUMyNS4zOTQ5IDExLjk3NDQgMjQuMzA3IDkuMzQ5MzMgMjIuMzMgNy4zNzQ3M0MyMC4zNTMgNS40MDAxMyAxNy43MjQ0IDQuMzEyMTggMTQuOTI3NSA0LjMxMVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS43NzQ5IDkuNTAxOTNDMTEuNTM5IDguOTc4OSAxMS4yOTA4IDguOTY4MyAxMS4wNjY2IDguOTU5MTJDMTAuODgzMSA4Ljk1MTM1IDEwLjY3MzEgOC45NTE4MiAxMC40NjMzIDguOTUxODJDMTAuMjUzMyA4Ljk1MTgyIDkuOTEyNCA5LjAzMDQ3IDkuNjI0MDcgOS4zNDQ4NkM5LjMzNTUxIDkuNjU5MjQgOC41MjIyMiAxMC40MTkyIDguNTIyMjIgMTEuOTY0OUM4LjUyMjIyIDEzLjUxMDcgOS42NTAyNiAxNS4wMDQyIDkuODA3NCAxNS4yMTRDOS45NjQ3OCAxNS40MjM2IDExLjk4NDkgMTguNjk3IDE1LjE4NDYgMTkuOTU2MUMxNy44NDM0IDIxLjAwMjcgMTguMzg0NCAyMC43OTQ1IDE4Ljk2MTggMjAuNzQyMkMxOS41Mzg5IDIwLjY4OTkgMjAuODI0MSAxOS45ODIzIDIxLjA4NjIgMTkuMjQ4N0MyMS4zNDg2IDE4LjUxNTIgMjEuMzQ4NiAxNy44ODY2IDIxLjI3IDE3Ljc1NTJDMjEuMTkxMiAxNy42MjQxIDIwLjk4MTUgMTcuNTQ1NiAyMC42NjY1IDE3LjM4ODZDMjAuMzUxNyAxNy4yMzE1IDE4LjgwNDIgMTYuNDcxMyAxOC41MTU2IDE2LjM2NjVDMTguMjI3IDE2LjI2MTcgMTguMDE3MyAxNi4yMDk1IDE3LjgwNzMgMTYuNTIzOEMxNy41OTc2IDE2LjgzODIgMTYuOTk0NyAxNy41NDU2IDE2LjgxMDkgMTcuNzU1MkMxNi42Mjc0IDE3Ljk2NTEgMTYuNDQzOCAxNy45OTEyIDE2LjEyODggMTcuODM0MUMxNS44MTQxIDE3LjY3NjYgMTQuODAwMiAxNy4zNDUyIDEzLjU5NzYgMTYuMjc0OUMxMi42NjE4IDE1LjQ0MjIgMTIuMDMwMiAxNC40MTM4IDExLjg0NjQgMTQuMDk5NEMxMS42NjI5IDEzLjc4NTEgMTEuODI2OCAxMy42MTUgMTEuOTg0NyAxMy40NTg0QzEyLjEyNiAxMy4zMTc2IDEyLjI5OTQgMTMuMDkxNSAxMi40NTcgMTIuOTA4MUMxMi42MTQgMTIuNzI0NiAxMi42NjY2IDEyLjU5MzcgMTIuNzcxMyAxMi4zODQ0QzEyLjg3NjMgMTIuMTc0NSAxMi44MjM5IDExLjk5MTEgMTIuNzQ1MSAxMS44MzRDMTIuNjY2NiAxMS42NzY5IDEyLjA1NDggMTAuMTIzMiAxMS43NzQ5IDkuNTAxOTNaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2YiIHg9Ii0yNC4zMzk0IiB5PSItMjQuMzcxOCIgd2lkdGg9Ijc4LjY3ODciIGhlaWdodD0iNzguNzQzNiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMy4zNDQ0IiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXIiLz4KPC9maWx0ZXI+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjE0LjcxMDIiIHkxPSI1LjU2NTM3IiB4Mj0iMTQuODE2IiB5Mj0iMjMuNDI3NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNTdEMTYzIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzIzQjMzQSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
const imgLogo = "data:image/png;base64,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";
const locationImage = "data:image/png;base64,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";


export default function Index() {
  return (
    <>
      {/* BOTÓN WHATSAPP */}
      <a
        className="whatsapp-button"
        href="https://api.whatsapp.com/send/?phone=525554068105&text=Quiero%20m%C3%A1s%20informes%20sobre%20el%20proyecto&type=phone_number&"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={img1}
        />
      </a>
      {/* HEADER */}
      <div className="style__SiteHeader-sc-61nwup-0 ccenLW site-header site-header--menu-end light-header site-header--sticky  site-header">
        <div className="container">
          <nav className="site-navbar navbar navbar-expand-lg navbar-dark bg-dark">
            <a href="/" className="navbar-brand">
              <img
                src={imgLogo}
                alt="site-brand"
              />
            </a>

            <div className="nueva-navbar">
              <button
                aria-controls="responsive-navbar-nav"
                type="button"
                aria-label="Toggle navigation"
                className="hamburgur navbar-toggler collapsed"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="navbar-collapse collapse"
                id="responsive-navbar-nav"
              >
                <button
                  aria-controls="responsive-navbar-nav"
                  type="button"
                  aria-label="Toggle navigation"
                  className="d-lg-none offcanvas-close navbar-toggler collapsed"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="mr-auto site-menu-main navbar-nav">
                  <div className="main-nav-item nav-item">
                    <a className="nav-link" href="/#proyecto">
                      Proyecto
                    </a>
                  </div>
                  <div className="main-nav-item nav-item">
                    <a className="nav-link" href="/#departamentos">
                      Departamentos
                    </a>
                  </div>
                  <div className="main-nav-item nav-item">
                    <a className="nav-link" href="/#amenidades">
                      Amenidades
                    </a>
                  </div>
                  <div className="main-nav-item nav-item">
                    <a className="nav-link" href="/#oficinas">
                      Oficinas
                    </a>
                  </div>
                  <div className="main-nav-item nav-item">
                    <a className="nav-link" href="/#contacto">
                      Contacto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <div
        style={{ backgroundImage: "url(/static/GTC-079.jpg)" }}
        className="box__Box-sc-3l6bf7-0 style__Hero-xomf4a-0 kdbiMz gBiGQN"
      >
        <div className="container">
          <div className="justify-content-start row">
            <div className="col-xl-9 col">
              <div className="box__Box-sc-3l6bf7-0 style__Content-xomf4a-1 kdbiMz text-left">
                <h1
                  data-aos="fade-up"
                  className="typography__Heading-fvecw2-0 style__Title-xomf4a-3 fsZrib dEKvGS"
                >
                  Un lugar para disfrutar
                </h1>
                <p className="typography__Paragraph-fvecw2-1 style__Text-xomf4a-2 hiGvMU fWNuMO">
                  Tu casa y todo lo que da calidad a tu vida, a solo 1.6 km de
                  Las Águilas y 5 km de Santa Fe
                </p>
              </div>
              <a
                href="https://youtu.be/edy9h4d96is"
                target="_blank"
                rel="noopener noreferrer"
                className="entrega"
              >
                Preventa Nueva Etapa Torre City
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* FIN HERO */}
      {/* AVANCE DE OBRA */}
      <div id="avance" className="box__Box-sc-3l6bf7-0 style__Team-sc-1fzqs3z-0 eUkHKf cNgFcy">
        <div className="container">
          <div className="justify-content-center row">
            <div className="col-xxl-6 col-md-8 col-xs-10 col">
              <div className="box__Box-sc-3l6bf7-0 style__Box-sc-1fzqs3z-4 kdbiMz text-center">
                <div className="box__Box-sc-3l6bf7-0 style__SectionTitle-iwdkd7-0 kdbiMz">
                  <div className="typography__Heading-fvecw2-0 style__Subtitle-iwdkd7-2 knBbjW jwujac"><span></span></div>
                  <h2 className="typography__Heading-fvecw2-0 style__Main-iwdkd7-3 knBbjW bvSJqm"><span>AVANCE DE OBRA TORRE
                    CITY, ESTRENA EN 2026</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FIN AVANCE DE OBRA */}

      {/* AVANCE DE OBRA SLIDER */}
      <PortfolioDetails />
      {/* FIN AVANCE DE OBRA SLIDER */}

      {/** PROYECTO  */}
      <div id="proyecto" className="box__Box-sc-3l6bf7-0 style__Container-sc-1egjs8v-0 khLQZj jSIAne">
        <div className="container">
          <div className="align-items-center justify-content-center row">
            {/* Columna de texto */}
            <div className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-1 order-lg-1 col">
              <div className="react-reveal">
                <div className="box__Box-sc-3l6bf7-0 style__Box-sc-1egjs8v-2 gQnuFo">
                  <div className="box__Box-sc-3l6bf7-0 style__SectionTitle-sc-3gn3eb-0 kdbiMz">
                    <div className="typography__Heading-fvecw2-0 style__Subtitle-sc-3gn3eb-2 hDZeZH jlYtoB">
                      <span></span>
                    </div>
                    <h2 className="typography__Heading-fvecw2-0 style__Main-sc-3gn3eb-3 hDZeZH fgDKNb">
                      <span>Proyecto</span>
                    </h2>
                    <p className="typography__Paragraph-fvecw2-1 style__Text-sc-3gn3eb-1 dIgLCt fYhGAX">
                      <span>Lo que deseas para tu vida y la de tu familia</span>
                    </p>
                  </div>
                  <p className="grand-tower-text" style={{ marginBottom: "69px" }}>
                    <b>Grand Tower Centenario</b> se inspira en la calidad de vida
                    para toda la familia. Creemos que el estilo Grand es una
                    inversión inteligente que se centra en cómo y con quién pasas
                    tu tiempo. Con los espacios para estar activo, para socializar,
                    inspirarte, trabajar, disfrutar, conectar y crear los momentos
                    que hacen que cada día sea un gran día.
                    <br />
                    El estilo de vida Grand Residential &amp; Amenities es apreciar
                    la calidad en lo tangible como cocinas, pisos y acabados en los
                    departamentos, y la amplitud y variedad de las áreas comunes, y
                    también en lo intangible como la plusvalía, la comodidad y el
                    lujo de tener una buena vida.
                  </p>
                </div>
              </div>
            </div>

            {/* Columna de imagen */}
            <ImageSection />
          </div>
        </div>
      </div>
      {/** FIN PROYECTO  */}

      {/* {/** DEPTARTAMENTOS */}
      <div id="departamentos" className="box__Box-sc-3l6bf7-0 style__PortfolioDetails-umf5kp-0 bqGpWs jEZIhY">
        <div className="container">
          <div className="text-center justify-content-center row">
            <div className="col-10">
              <h2 className="typography__Heading-fvecw2-0 style__Title-umf5kp-4 knBbjW dVybo">
                Departamentos
              </h2>
              <p className="typography__Paragraph-fvecw2-1 style__Text-sc-3gn3eb-1 dIgLCt fYhGAX" style={{
                color: "#ffffff"
              }}>
                <span>
                  Cómodos y funcionales, con todo lo necesario para una vida Grand
                </span>
              </p>
              <div className="group-recorrido">
                <a href="https://my.matterport.com/show/?m=QkZmhAt7tPq" target="_blank" rel="noreferrer"
                  className="btn-recorrido">
                  Recorrido Virtual 3 recámaras
                </a>
                <a href="https://my.matterport.com/show/?m=aXvvYDEUwP3" target="_blank" rel="noreferrer"
                  className="btn-recorrido">
                  Recorrido Virtual 2 recámaras
                </a>
              </div>
            </div>
          </div>

          {/* Características */}
          <div className="justify-content-center row">
            <div className="col-xl-4 col-lg-4 col-md-10 col-xs-10 mb-5 col-10">
              <div className="react-reveal deptos" data-aos="fade-up">
                <img src="/static/GTC-004.jpg" alt="Características" />
                <div>
                  <h3>Características</h3>
                  <ul>
                    <li>46 a 91m²</li>
                    <li>1, 2 y 3 recámaras</li>
                    <li>1 o 2 baños</li>
                    <li>1 o 2 estacionamientos</li>
                    <li>Roof garden privado opcional</li>
                    <li>Bodega opcional</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Acabados */}
            <div className="col-xl-4 col-lg-4 col-md-10 col-xs-10 mb-5 col-10">
              <div className="react-reveal deptos" data-aos="fade-up">
                <img src="/static/GTC-005.jpg" alt="Acabados" />
                <div>
                  <h3>Acabados</h3>
                  <ul>
                    <li>Pisos de porcelanato en sala-comedor, cocina y baños.</li>
                    <li>Pisos de madera de ingeniería en recámaras.</li>
                    <li>Cocina integral con cubierta de granito.</li>
                    <li>Lavabo con cubierta de mármol en baño.</li>
                    <li>Lámparas led.</li>
                    <li>Closets con diseño moderno y funcional.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Servicios */}
            <div className="col-xl-4 col-lg-4 col-md-10 col-xs-10 col-10">
              <div className="react-reveal deptos" data-aos="fade-up">
                <img src="/static/GTC-083.jpg" alt="Servicios" />
                <div>
                  <h3>Servicios</h3>
                  <ul>
                    <li>28 Amenidades</li>
                    <li>Estudios (oficinas) privados</li>
                    <li>Seguridad 24/7</li>
                    <li>Acceso controlado con huella digital</li>
                    <li>Estacionamiento de visitas</li>
                    <li>Lavandería</li>
                    <li>Salón de belleza</li>
                    <li>Pet Spa</li>
                    <li>Minisúper</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔽 Aquí seguirían las secciones Torre City, Torre Park y Torre Centenario */}
      <div className="box__Box-sc-3l6bf7-0 style__Feature-gsy7su-0 uMiVO dQabNc">
        {/* Torre City */}
        <div className="apagar-lg">
          <div className="align-items-center justify-content-center row">
            <div className="col-xl-10 col-lg-6 col-md-10 col-xs-10 col-10">
              <div className="box__Box-sc-3l6bf7-0 style__Box-gsy7su-7 kdbiMz">
                <div className="typography__Heading-fvecw2-0 style__TitleThree-gsy7su-1 knBbjW bvRtkn">
                  Departamentos Personalizables
                </div>
                <p className="typography__Paragraph-fvecw2-1 style__Text-sc-3gn3eb-1 dIgLCt fYhGAX" style={{
                  textAlign: "center"
                }}>
                  <span>
                    Cómodos y funcionales, con todo lo necesario para una vida Grand
                  </span>
                </p>
                <h3 className="torre park text-center">Torre City</h3>
                <p className="typography__Paragraph-fvecw2-1 style__Text-sc-3gn3eb-1 dIgLCt fYhGAX" style={{
                  textAlign: "center"
                }}>
                  <span>¡PREVENTA! ENTREGA VERANO 2026</span>
                </p>
              </div>
            </div>
          </div>
          {/* Tabs Torre City (Prototipos) */}
          <div className="justify-content-center row">
            <div className="col-xl-10 col-xs-10 col-md-10 col-10">
              <div className="text-center" data-tabs="true">
                <ul className="justify-content-center" role="tablist">
                  <li className="react-tabs__tab react-tabs__tab--selected" role="tab">
                    <span className="titulo">Prototipo WE</span> <br />{" "}
                    <span className="descripcion">46m²</span>
                  </li>
                  <li className="react-tabs__tab" role="tab">
                    <span className="titulo">Prototipo VI</span> <br />{" "}
                    <span className="descripcion">46m²</span>
                  </li>
                  <li className="react-tabs__tab" role="tab">
                    <span className="titulo">Prototipo QI</span> <br />{" "}
                    <span className="descripcion">69m² + 3.6m² de balcón</span>
                  </li>
                  {/* ... 🔽 Aquí seguirías listando el resto de los prototipos ... */}
                </ul>

                {/* Panel del tab activo */}
                <div className="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel">
                  <div>
                    <img className="borde-modal" style={{ cursor: "pointer", maxWidth: "100%", maxHeight: "100%" }}
                      src="/static/WE.png" alt="Prototipo WE" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Torre Park y Torre Centenario puedes convertirlas igual que Torre City */}
      </div>
      {/** FIN DEPARTAMENTOS */}

      {/** AMENIDADES */}
      <Amenidades />
      {/** FIN AMENIDADES */}

      {/** ESTUDIOS PRIVADOS */}
      <Estudios />
      {/** FIN ESTUDIOS PRIVADOS */}

      {/** UBICACIÓN */}
      <div id="ubicacion" className="box__Box-sc-3l6bf7-0 style__Contact-sc-1gltwbs-0 kdbiMz cZeuRh">
        <div className="container">
          <div className="justify-content-center text-center row">
            <div className="col-xl-12 col-md-10 col-10">
              <div className="box__Box-sc-3l6bf7-0 style__Box-sc-1gltwbs-8 PFIcc">
                <h2 className="typography__Heading-fvecw2-0 style__Title-sc-1gltwbs-1 dNrHTQ jhBuUk">
                  Nuestra Ubicación
                </h2>
                <p
                  className="typography__Paragraph-fvecw2-1 style__Text-sc-3gn3eb-1 dIgLCt fYhGAX"
                  style={{ textAlign: "center" }}
                >
                  <span>
                    Grand Tower Centenario se ubica a 1.6 km de Periférico, a la altura de Las Águilas,
                    y a un paso del nuevo centro comercial Portal Centenario*. Lo rodean parques y
                    reservas ecológicas, cines, tiendas y todos los servicios.
                  </span>
                </p>
                <p className="portal-text">
                  <hr />
                  *En Portal Centenario, marca registrada por Mexico Retail Properties, se encuentran
                  Walmart, Suburbia, Starbucks, Office Depot, Coppel, Smart Fit, Acuática Nelson Vargas,
                  Cinépolis y otras 80 tiendas de tu interés.
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.1900268847994!2d-99.2228246248685!3d19.36092288190321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20143d6edf845%3A0x9fed23aee817e565!2sGrand%20Tower%20Centenario!5e0!3m2!1sen!2smx!4v1744176079169!5m2!1sen!2smx"
                width="1037"
                height="801"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Grand Tower Centenario"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/** FIN UBICACIÓN */}

      {/** CONTACTO */}
      <Contact />
      {/** FIN CONTACTO */}

      {/** FOOTER */}
      <div id="footer" classNameName="box__Box-sc-3l6bf7-0 style__Footer-sc-13f7rrl-0 kdbiMz ETfrT">
        <div className="container">
          <div className="box__Box-sc-3l6bf7-0 style__Box-sc-13f7rrl-14 jSuCSf">
            <div className="justify-content-center row">
              <div className="col-lg-4 col-md-10 col-xs-10 col-10">
                <div className="box__Box-sc-3l6bf7-0 style__Widgets-sc-13f7rrl-1 kdbiMz footer-widgets footer-widgets--l7">
                  <div className="box__Box-sc-3l6bf7-0 style__Box-sc-13f7rrl-14 bbRAuk logo-footer"><a href="/#"><img
                    src={locationImage}
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
      {/** FIN FOOTER */}
    </>
  )
}