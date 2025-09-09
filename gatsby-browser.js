// gatsby-browser.js
import "./src/styles/global.css"
// gatsby-browser.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// gatsby-browser.js
import AOS from "aos"
import "aos/dist/aos.css"

export const onInitialClientRender = () => {
  AOS.init({
    duration: 1200,
    once: true,
  })
}
