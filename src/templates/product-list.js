import React from 'react';
import { Link, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar';
import Layout from '../components/layout';

export default ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1
      ? '/'
      : `/products/page=${(currentPage - 1).toString()}`;
  const nextPage = `/products/page=${(currentPage + 1).toString()}`;
  console.log(data);
  return (
    <Layout>
      <Typography>prroducts</Typography>
      <Grid container spacing={16}>
        {data.allProductsCsv.edges.map(({ node }) => (
          <Grid key={node.id} item md={4}>
            <Card>
              <CardActionArea component={Link} to={`/${node.slug}`}>
                <CardContent>
                  <Avatar src={node.images} alt={node.title} />
                  <Typography align="center">{node.title}</Typography>
                  <Typography align="center">{node.price}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      <Typography>
        {currentPage} of {numPages}
      </Typography>
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page →
        </Link>
      )}
    </Layout>
  );
};

export const productListQuery = graphql`
  query productListQuery($skip: Int!, $limit: Int!) {
    allProductsCsv(limit: $limit, skip: $skip) {
      edges {
        node {
          id
          title
          price
          slug
          collection
          images
        }
      }
    }
  }
`;
