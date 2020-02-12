import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import ImageGalleryCardList from '../components/ImageGalleryCardList';
import Layout from '../components/Layout';
import Lead from '../components/Lead';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';
import { baseline } from '../style';

export const query = graphql`
  query ImageGalleriesPageTemplate($limit: Int!, $skip: Int) {
    allContentfulImageGallery(
      limit: $limit
      skip: $skip
      sort: { fields: title, order: ASC }
    ) {
      edges {
        node {
          id
          images {
            description
            fixed(height: 272, width: 272) {
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

const NoGalleriesNotice = styled.p`
  font-weight: bold;
`;

const StyledImageGalleryCardList = styled(ImageGalleryCardList)`
  margin-bottom: calc(6 * ${baseline});
`;

const StyledPagination = styled(Pagination)`
  margin-bottom: calc(6 * ${baseline});
`;

type Props = {
  data: {
    allContentfulImageGallery: {
      edges: {
        node: {
          id: string;
          images: {
            description?: string;
            fixed: FixedObject;
          }[];
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

const ImageGalleriesPageTemplate: React.FC<Props> = ({ data, pageContext }) => {
  const imageGalleries = data.allContentfulImageGallery.edges.map(
    ({ node }) => node
  );

  return (
    <>
      <SEO
        title={
          pageContext.pageIsIndex
            ? 'Images'
            : `Images: Page ${pageContext.pageNumber}`
        }
      />
      <Layout>
        <h1>Images</h1>
        <Container>
          {pageContext.pageIsIndex ? (
            <></>
          ) : (
            <Lead>Page {pageContext.pageNumber}</Lead>
          )}
          <p>Click on an image gallery to see more.</p>
        </Container>
        {imageGalleries.length ? (
          <StyledImageGalleryCardList imageGalleries={imageGalleries} />
        ) : (
          <NoGalleriesNotice>No image galleries!</NoGalleriesNotice>
        )}
        {pageContext.totalPages > 1 && (
          <Container>
            <StyledPagination
              lastPageNumber={pageContext.totalPages}
              pageNumber={pageContext.pageNumber}
              urlRoot="images"
            />
          </Container>
        )}
      </Layout>
    </>
  );
};

export default ImageGalleriesPageTemplate;
