import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import CenteredTextColumn from '../components/CenteredTextColumn';
import Layout from '../components/Layout';
import Lead from '../components/Lead';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';
import ServiceCardList from '../components/ServiceCardList';
import { baseline, breakpoint } from '../style';

export const query = graphql`
  query ServicesPageTemplate($limit: Int!, $skip: Int) {
    allContentfulService(
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

const NoServicesNotice = styled(Lead)`
  font-weight: bold;
  text-align: center;
`;

const StyledPagination = styled(Pagination)`
  margin-bottom: calc(6 * ${baseline});
`;

const StyledServiceCardList = styled(ServiceCardList)`
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
    allContentfulService: {
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

const ServicesPageTemplate: React.FC<Props> = ({ data, pageContext }) => {
  const services = data.allContentfulService.edges.map(({ node }) => node);

  return (
    <>
      <SEO
        title={
          pageContext.pageIsIndex
            ? 'Services'
            : `Services: Page ${pageContext.pageNumber}`
        }
      />
      <Layout>
        <h1>Services</h1>
        <CenteredTextColumn>
          {pageContext.pageIsIndex ? (
            <p>
              Miss a Sunday? Want to hear what our pastor and guest preachers
              have to say?
            </p>
          ) : (
            <Lead>Page {pageContext.pageNumber}</Lead>
          )}
          <p>Click on a past service to watch it and learn more.</p>
        </CenteredTextColumn>
        {services.length ? (
          <StyledServiceCardList services={services} />
        ) : (
          <NoServicesNotice>
            No services available… <br />
            Check back soon!
          </NoServicesNotice>
        )}
        {pageContext.totalPages > 1 && (
          <CenteredTextColumn>
            <StyledPagination
              lastPageNumber={pageContext.totalPages}
              pageNumber={pageContext.pageNumber}
              urlRoot="services"
            />
          </CenteredTextColumn>
        )}
      </Layout>
    </>
  );
};

export default ServicesPageTemplate;
