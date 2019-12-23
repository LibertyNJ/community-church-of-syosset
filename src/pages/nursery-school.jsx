import React from 'react';

import ExternalLink from '../components/ExternalLink';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function NurserySchoolPage({ ...restProps }) {
  return (
    <>
      <SEO title="Nursery School" />
      <Layout {...restProps}>
        <h1>Nursery School</h1>
        <p>
          The Community Church of Syosset Nursery School offers a half-day
          program for two-, three-, and four-year-old children. Our dedicated
          teachers and their assistants stimulate young minds through
          educational activities combined with outdoor and indoor playtime.
        </p>
        <section>
          <h2>Calendar</h2>
          <p>
            We follow the{' '}
            <ExternalLink href="https://www.syossetschools.org/Page/2">
              Syosset Central School District’s calendar
            </ExternalLink>
            .
          </p>
        </section>
        <section>
          <h2>Registration</h2>
          <p>
            To register your child, call the church office at{' '}
            <a href="tel:+15169212240">(516)921-2240</a>.
          </p>
        </section>
        <section>
          <h2>Information</h2>
          <dl>
            <dt>Director</dt>
            <dd>Margaret Schraeder</dd>
            <dt>Address</dt>
            <dd>
              36 Church Street <br />
              Syosset, NY 11791
            </dd>
            <dt>Phone</dt>
            <dd>
              <a href="tel:+15163645090">(516)364-5090</a>
            </dd>
            <dt>Program</dt>
            <dd>Half-day for two-, three-, and four-year-old children.</dd>
          </dl>
        </section>
      </Layout>
    </>
  );
}
