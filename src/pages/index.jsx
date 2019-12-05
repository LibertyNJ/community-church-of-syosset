import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function IndexPage({ ...restProps }) {
  return (
    <>
      <SEO title="Home" />
      <Layout {...restProps}>
        <h1>
          No matter who you are, or where you are on life’s journey, you are
          welcome here!
        </h1>
        <p>
          An open and affirming congregation of the United Church of Christ,
          where God is still speaking.
        </p>
        <Link to="#">Visit us</Link>
        <Link to="/about">Learn more</Link>
      </Layout>
    </>
  );
}
