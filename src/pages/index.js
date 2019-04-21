import React from 'react';
import { Link, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Layout from '../components/layout';

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Typography variant="h3">prroducts</Typography>
      <Button
        component={Link}
        variant="contained"
        to="/products"
        color="primary"
      >
        view products
      </Button>
      <Grid container spacing={16}>
        {data.products.edges.map(({ node: product }) => (
          <Grid key={product.id} item md={4}>
            <Card>
              <CardContent>
                <Img fixed={product.image.fixed} />
                <Typography align="center">{product.title}</Typography>
                <Typography align="center">{product.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query CatalogueQuery {
    products: allDatoCmsProduct(limit: 10) {
      edges {
        node {
          id
          title
          price
          image {
            fixed(width: 144, height: 144, imgixParams: { fm: "jpg" }) {
              ...GatsbyDatoCmsFixed
            }
          }
        }
      }
    }
  }
`;
