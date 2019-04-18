import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <CssBaseline />
        <Typography component={Link} variant='h3' to='/'>
          {data.site.siteMetadata.title}
        </Typography>
        {children}
      </div>
    )}
  />
);
