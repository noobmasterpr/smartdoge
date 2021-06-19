module.exports = {
  siteMetadata: {
    title: "Portfolio",
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Inu",
        short_name: "Inu",
        start_url: "/",
        display: "standalone",
        icon: "src/images/Orange.png",
      },
    },

    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-transition-link",
    "gatsby-plugin-sass",
  ],
};
