import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiLink from '@material-ui/core/Link';

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
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <CssBaseline />
        <MuiLink component={Link} variant="caption" to="/">
          {data.site.siteMetadata.title}
        </MuiLink>
        {children}
      </div>
    )}
  />
);
