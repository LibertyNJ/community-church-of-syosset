import { Link } from 'gatsby';
import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

export default function PastorPage({ ...restProps }) {
  return (
    <>
      <SEO title="Pastor" />
      <Layout {...restProps}>
        <h1>Our pastor</h1>
        <section>
          <h2>The Reverend Forrest Parkinson</h2>
          <div>image placeholder</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            accusamus molestias voluptates cumque, reprehenderit tempore
            cupiditate perferendis quos mollitia, ut iste vitae voluptatibus
            neque exercitationem tempora magni laborum assumenda eveniet.
          </p>
        </section>
        <Link to="#">Visit us</Link>
      </Layout>
    </>
  );
}
