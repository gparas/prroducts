import React from 'react';
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/layout';

export default ({ data }) => (
  <Layout>
    <Typography component="h1" variant="h1">
      About {data.site.siteMetadata.title}
    </Typography>
    <Typography>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </Typography>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
