import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function EventsPage({ ...restProps }) {
  return (
    <>
      <SEO title="Events" />
      <Layout {...restProps}>
        <h1>Events</h1>
        <p>
          We are more than just Sunday morning worship. Come and join us for one
          of our upcoming social gatherings or special services.
        </p>
      </Layout>
    </>
  );
}
