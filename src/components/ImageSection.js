import React, { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";

const projecImg = "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMCBAUB/8QAFwEBAQEBAAAAAAAAAAAAAAAAAQIAA//aAAwDAQACEAMQAAAB0KraKXxpRiohzjUxY7//xAAdEAACAgIDAQAAAAAAAAAAAAABAgMRABASISIj/9oACAEBAAEFAnPFRJZyY+kP0rHkZz3d6Ov/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwGlP//EABsQAAEEAwAAAAAAAAAAAAAAABAAARExEiBh/9oACAEBAAY/ApVCEzdGQvT/xAAZEAEBAQEBAQAAAAAAAAAAAAABEQAhMUH/2gAIAQEAAT8hsen5oXjTF3fl0AculedxRMZKYYt7lDxmmGF3/9oADAMBAAIAAwAAABBHy/L/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/EGiEz//EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8QQoqz/8QAHhABAAMAAgIDAAAAAAAAAAAAAQARITFREEFxgfD/2gAIAQEAAT8QqA6HbDLgoO3vjQA6r+ZaMoFX6uAbQOzYd0QVNCACuf7mVQr2Um/UpuQAs5lJ15n/2Q==";

function ImageSection() {
  // Hook que reemplaza el <script>
    useEffect(() => {
    AOS.init({
        duration: 1000, // duración del efecto
        once: true,     // se anima solo la primera vez
    });
    AOS.refresh(); // 👈 asegura que detecte los elementos
}, []);


  return (
    <div className="col-xl-6 offset-xl-1 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-2 col-12">
      <div className="react-reveal">
        <div
          data-aos="fade-left"
          className="box__Box-sc-3l6bf7-0 style__Image-sc-1egjs8v-1 kdbiMz iOUQgr"
        >
          <div
            data-gatsby-image-wrapper=""
            className="gatsby-image-wrapper w-100 imagen"
          >
            <div aria-hidden="true" style={{ paddingTop: "134.27935447968838%" }}></div>

            {/* Imagen base64 (placeholder) */}
            <img
              aria-hidden="true"
              data-placeholder-image=""
              style={{ opacity: 1, transition: "opacity 500ms linear" }}
              decoding="async"
              src={projecImg}
              alt=""
            />

            <picture>
              <source
                type="image/webp"
                data-srcset="/static/GTC-079.jpg 750w,
                              /static/GTC-079.jpg 1080w,
                              /static/GTC-079.jpg 1366w,
                              /static/GTC-079.jpg 1797w"
                sizes="100vw"
              />
              <img
                data-gatsby-image-ssr=""
                layout="fullWidth"
                data-main-image=""
                style={{ opacity: 0 }}
                sizes="100vw"
                decoding="async"
                loading="lazy"
                data-src="/static/GTC-079.jpg"
                data-srcset="/static/GTC-079.jpg 750w,
                             /static/GTC-079.jpg 1080w,
                             /static/GTC-079.jpg 1366w,
                             /static/GTC-079.jpg 1797w"
                alt="content"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
