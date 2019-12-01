import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Error404Page({ ...restProps }) {
  return (
    <>
      <SEO title="Error 404: Resource Not found" />
      <Layout {...restProps}></Layout>
    </>
  );
}
