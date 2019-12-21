import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function MissionPage({ ...restProps }) {
  return (
    <>
      <SEO title="Mission" />
      <Layout {...restProps}>
        <h1>Mission</h1>
        <p>
          Ten percent of the church’s income is pledged for mission outreach.
          Those funds are split between local missions and missions within the
          United Church of Christ. Special offerings are taken for emergent
          mission work that is brought to our attention each year.
        </p>
        <p>
          Click on the images below to learn more about the missions we support.
        </p>
      </Layout>
    </>
  );
}
