module.exports = {
  siteMetadata: {
    siteUrl: `https://tusitio.netlify.app`, // cambia luego por tu dominio real
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    `gatsby-plugin-netlify`, // necesario para manejar rutas y estilos correctamente
  ],
};

// 🔧 Este bloque va fuera del module.exports
exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();

  // Evita errores con mini-css-extract-plugin en Netlify
  config.cache = false;

  actions.replaceWebpackConfig(config);
};
