import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import EventCardList from '../components/EventCardList';
import Layout from '../components/Layout';
import Lead from '../components/Lead';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';
import { baseline, breakpoint } from '../style';

export const query = graphql`
  query EventsPageTemplate($limit: Int!, $skip: Int) {
    allContentfulEvent(
      limit: $limit
      skip: $skip
      sort: { fields: date, order: ASC }
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

const NoEventsNotice = styled.p`
  font-weight: bold;
`;

const StyledEventCardList = styled(EventCardList)`
  margin-bottom: calc(6 * ${baseline});

  @media (min-width: ${breakpoint.md}) {
    display: grid;
    gap: calc(6 * ${baseline});
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoint.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledPagination = styled(Pagination)`
  margin-bottom: calc(6 * ${baseline});
`;

type Props = {
  data: {
    allContentfulEvent: {
      edges: {
        node: {
          date: string;
          id: string;
          image?: {
            description?: string;
            fixed: FixedObject;
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

const EventsPageTemplate: React.FC<Props> = ({ data, pageContext }) => {
  const events = data.allContentfulEvent.edges.map(({ node }) => node);

  return (
    <>
      <SEO
        title={
          pageContext.pageIsIndex
            ? 'Events'
            : `Events: Page ${pageContext.pageNumber}`
        }
      />
      <Layout>
        <h1>Events</h1>
        <Container>
          {pageContext.pageIsIndex ? (
            <>
              <Lead>We are more than just Sunday morning.</Lead>
              <p>
                Join us for one of our upcoming social gatherings or special
                services.
              </p>
            </>
          ) : (
            <Lead>Page {pageContext.pageNumber}</Lead>
          )}
          <p>Click on an event to see details.</p>
        </Container>
        {events.length ? (
          <StyledEventCardList events={events} />
        ) : (
          <NoEventsNotice>No upcoming events!</NoEventsNotice>
        )}
        {pageContext.totalPages > 1 && (
          <Container>
            <StyledPagination
              lastPageNumber={pageContext.totalPages}
              pageNumber={pageContext.pageNumber}
              urlRoot="events"
            />
          </Container>
        )}
      </Layout>
    </>
  );
};

export default EventsPageTemplate;
