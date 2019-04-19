import React from 'react';
import { Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <Typography variant="h3">prroducts</Typography>
    <Button component={Link} variant="contained" to="/products" color="primary">
      view products
    </Button>
  </Layout>
);
