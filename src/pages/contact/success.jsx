import { Link } from 'gatsby';
import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

export default function ContactPage({ ...restProps }) {
  return (
    <>
      <SEO title="Contact success" />
      <Layout {...restProps}>
        <h1>Message received</h1>
        <p>Thank you for reaching out to us. We will be in touch soon!</p>
        <Link to="/">Return home</Link>
      </Layout>
    </>
  );
}
