import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function PrayerListPage({ ...restProps }) {
  return (
    <>
      <SEO title="Prayer List" />
      <Layout {...restProps}>
        <h1>Prayer List</h1>
        <p>Please join us in praying for continued healing and peace for:</p>
      </Layout>
    </>
  );
}
