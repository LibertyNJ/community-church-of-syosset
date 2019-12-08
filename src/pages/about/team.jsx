import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

export default function TeamPage({ ...restProps }) {
  return (
    <>
      <SEO title="Team" />
      <Layout {...restProps}>
        <h1>Our team</h1>
        <div>Team member placeholder</div>
      </Layout>
    </>
  );
}
