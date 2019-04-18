module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
  plugins: [
    `gatsby-transformer-csv`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto:300,400,500'],
        },
      },
    },
  ],
};
