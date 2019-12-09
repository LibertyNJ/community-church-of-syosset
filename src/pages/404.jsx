import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Error404Page({ ...restProps }) {
  return (
    <>
      <SEO title="404: Not found" />
      <Layout {...restProps}>
        <h1>404: Not found</h1>
        <p>We’re sorry! We couldn’t find the page you are looking for.</p>
        <Link to="/">Go home</Link>
      </Layout>
    </>
  );
}
