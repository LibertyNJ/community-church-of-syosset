import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function SermonsPage({ ...restProps }) {
  return (
    <>
      <SEO title="Sermons" />
      <Layout {...restProps}>
        <h1>Sermons</h1>
        <p>
          Did you miss a Sunday, or want to hear what our pastor and guest
          preachers have to say?
        </p>
        <p>Explore their messages by clicking on the sermons below.</p>
      </Layout>
    </>
  );
}
