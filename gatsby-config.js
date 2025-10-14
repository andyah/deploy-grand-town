module.exports = {
  siteMetadata: {
    siteUrl: `https://tusitio.netlify.app`, // puedes dejarlo genérico o cambiarlo luego por tu dominio real
  },
  // pathPrefix: `/`, // importante para que las rutas de estilos y assets funcionen en Netlify
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
}
