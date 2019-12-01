import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function IndexPage({...restProps}) {
  return (
    <>
      <SEO title="Home" />
      <Layout {...restProps}></Layout>
    </>
  );
}
