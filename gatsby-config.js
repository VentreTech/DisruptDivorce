module.exports = {
  siteMetadata: {
    title: "Let's Divorce",
  },
  plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `img`,
          path: `${__dirname}/src/images/`
        }
      },
      'gatsby-plugin-react-helmet',
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "UA-121056988-1",
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is optional
          // anonymize: true,
          // Setting this parameter is also optional
          // respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
  ],
  pathPrefix: "DisruptDivorce"
};
