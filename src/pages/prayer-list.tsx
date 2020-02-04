import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Lead from '../components/Lead';
import SEO from '../components/SEO';
import { baseline, breakpoint } from '../style';

const Container = styled.div`
  margin: 0 auto;
  max-width: 33em;
`;

const ListItem = styled.li`
  margin-left: 1em;
`;

const UnorderedList = styled.ul`
  margin-bottom: calc(6 * ${baseline});
  padding-left: 0;

  @media (min-width: ${breakpoint.md}) {
    column-gap: calc(6 * ${baseline});
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

type Data = {
  contentfulSimpleList: {
    values: string[];
  };
};

const PrayerListPage: React.FC = () => {
  const data = useStaticQuery<Data>(graphql`
    query PrayerListPage {
      contentfulSimpleList(title: { eq: "Prayer List" }) {
        values
      }
    }
  `);

  return (
    <>
      <SEO title="Prayer List" />
      <Layout>
        <h1>Prayer List</h1>
        <Container>
          <Lead>Join us in praying for continued healing and peace for:</Lead>
          <UnorderedList>
            {data.contentfulSimpleList.values.map((value, index) => (
              <ListItem key={index}>{value}</ListItem>
            ))}
          </UnorderedList>
        </Container>
      </Layout>
    </>
  );
};

export default PrayerListPage;
