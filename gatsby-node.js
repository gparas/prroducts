const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
    {
      allProductsCsv {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
        result.data.allProductsCsv.edges.forEach(({ node }) => {
            createPage({
                path: node.slug,
                component: path.resolve(`./src/templates/product.js`),
                context: {
                    slug: node.slug,
                },
            })
        })
    })
}