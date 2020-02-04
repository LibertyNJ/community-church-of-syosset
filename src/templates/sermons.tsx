import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Lead from '../components/Lead';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';
import SermonCardList from '../components/SermonCardList';
import { baseline, breakpoint } from '../style';

export const query = graphql`
  query SermonsPageTemplate($limit: Int!, $skip: Int) {
    allContentfulSermon(
      limit: $limit
      skip: $skip
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          date
          id
          image {
            description
            fixed(height: 72, width: 72) {
              ...GatsbyContentfulFixed
            }
          }
          preacher {
            name
          }
          slug
          title
        }
      }
    }
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 33em;
`;

const NoSermonsNotice = styled.p`
  font-weight: bold;
`;

const StyledPagination = styled(Pagination)`
  margin-bottom: calc(6 * ${baseline});
`;

const StyledSermonCardList = styled(SermonCardList)`
  @media (min-width: ${breakpoint.md}) {
    display: grid;
    gap: calc(6 * ${baseline});
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoint.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

type Props = {
  data: {
    allContentfulSermon: {
      edges: {
        node: {
          date: string;
          id: string;
          image?: {
            description?: string;
            fixed: FixedObject;
          };
          preacher: {
            name: string;
          };
          slug: string;
          title: string;
        };
      }[];
    };
  };
  pageContext: {
    pageIsIndex?: boolean;
    pageNumber: number;
    totalPages: number;
  };
};

const SermonsPageTemplate: React.FC<Props> = ({ data, pageContext }) => {
  const sermons = data.allContentfulSermon.edges.map(({ node }) => node);

  return (
    <>
      <SEO
        title={
          pageContext.pageIsIndex
            ? 'Sermons'
            : `Sermons: Page ${pageContext.pageNumber}`
        }
      />
      <Layout>
        <h1>Sermons</h1>
        <Container>
          {pageContext.pageIsIndex ? (
            <p>
              Did you miss a Sunday, or want to hear what our pastor and guest
              preachers have to say?
            </p>
          ) : (
            <Lead>Page {pageContext.pageNumber}</Lead>
          )}
          <p>Click on a sermon for details.</p>
        </Container>
        {sermons.length ? (
          <StyledSermonCardList sermons={sermons} />
        ) : (
          <NoSermonsNotice>No sermons available!</NoSermonsNotice>
        )}
        {pageContext.totalPages > 1 && (
          <Container>
            <StyledPagination
              lastPageNumber={pageContext.totalPages}
              pageNumber={pageContext.pageNumber}
              urlRoot="sermons"
            />
          </Container>
        )}
      </Layout>
    </>
  );
};

export default SermonsPageTemplate;
