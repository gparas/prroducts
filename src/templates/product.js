import React from 'react'
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/layout';

export default ({ data }) => {
    const product = data.productsCsv
    return (
        <Layout>
            <Typography gutterBottom variant="h6" component="h3">
                {product.title}
            </Typography>
            <Typography>
                {product.price}
            </Typography>
        </Layout>
    )
}

export const pageQuery = graphql`
  query($slug: String!) {
    productsCsv(slug: { eq: $slug }) {
      title
      price
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`