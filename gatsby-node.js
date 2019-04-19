const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allProductsCsv(limit: 1000) {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const products = result.data.allProductsCsv.edges;

        const productsPerPage = 24;
        const numPages = Math.ceil(products.length / productsPerPage);
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/products` : `/products/page=${i + 1}`,
            component: path.resolve('./src/templates/product-list.js'),
            context: {
              limit: productsPerPage,
              skip: i * productsPerPage,
              numPages,
              currentPage: i + 1,
            },
          });
        });

        products.forEach(({ node }) => {
          createPage({
            path: node.slug,
            component: path.resolve(`./src/templates/product.js`),
            context: {
              slug: node.slug,
            },
          });
        });
      })
    );
  });
};
