import React from 'react';
import styled from 'styled-components';

import ExternalLink from '../components/ExternalLink';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { baseline } from '../style';

const Container = styled.div`
  margin: 0 auto;
  max-width: 33em;
`;

const DescriptionTerm = styled.dt`
  font-weight: bold;

  &::after {
    content: ': ';
  }
`;

const DescriptionDetails = styled.dd`
  margin-bottom: calc(6 * ${baseline});
  padding-left: 1em;
`;

const NurserySchoolPage: React.FC = () => (
  <>
    <SEO title="Nursery School" />
    <Layout>
      <h1>Nursery School</h1>
      <Container>
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
            <DescriptionTerm>Director</DescriptionTerm>
            <DescriptionDetails>Margaret Schraeder</DescriptionDetails>
            <DescriptionTerm>Address</DescriptionTerm>
            <DescriptionDetails>
              36 Church Street <br />
              Syosset, NY 11791
            </DescriptionDetails>
            <DescriptionTerm>Phone</DescriptionTerm>
            <DescriptionDetails>
              <a href="tel:+15163645090">(516)364-5090</a>
            </DescriptionDetails>
            <DescriptionTerm>Program</DescriptionTerm>
            <DescriptionDetails>
              Half-day for two-, three-, and four-year-old children.
            </DescriptionDetails>
          </dl>
        </section>
      </Container>
    </Layout>
  </>
);

export default NurserySchoolPage;
