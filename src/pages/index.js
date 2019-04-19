import React from 'react';
import { Link, graphql } from "gatsby";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Layout from '../components/layout';

export default ({ data }) => (
  <Layout>
    <Typography>prroducts</Typography>
    <Grid container spacing={16}>
      {data.allProductsCsv.edges.map(({ node }) => (
        <Grid key={node.id} item md={4}>
          <Card>
            <CardActionArea component={Link} to={`/${node.slug}`}>
              <CardContent>
                <Typography align="center">{node.title}</Typography>
                <Typography align="center">{node.price}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Layout>
);

export const query = graphql`
  query {
    allProductsCsv {
      edges {
        node {
          id
          title
          price
          slug
        }
      }
    }
  }
`