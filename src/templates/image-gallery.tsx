import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import GatsbyImage from 'gatsby-image/withIEPolyfill';
import React, { useState } from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import PageButtons from '../components/PageButtons';
import SEO from '../components/SEO';
import ShareSection from '../components/ShareSection';
import { baseline, breakpoint, color } from '../style';

export const query = graphql`
  query ImageGallery($id: String!) {
    contentfulImageGallery(id: { eq: $id }) {
      description {
        json
      }
      images {
        description
        file {
          details {
            image {
              width
            }
          }
        }
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
        id
      }
      title
    }
  }
`;

const Columns = styled.div`
  column-gap: calc(6 * ${baseline});
  margin-bottom: calc(6 * ${baseline});

  @media (min-width: ${breakpoint.md}) {
    columns: 2;
  }

  @media (min-width: ${breakpoint.lg}) {
    columns: 3;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 33em;
`;

type SelectedImageContainerProps = {
  maxWidth?: number;
};

const SelectedImageContainer = styled.div<SelectedImageContainerProps>`
  display: flex;
  height: auto;
  max-width: ${props => props.maxWidth}px;
  max-height: 100%;
  width: 100%;
`;

const SelectedImage = styled(GatsbyImage)`
  flex: 1;
  max-height: 100%;
`;

type ModalProps = {
  isVisible?: boolean;
  maxWidth?: number;
};

const Modal = styled.div<ModalProps>`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  padding: calc(6 * ${baseline});
  position: fixed;
  top: 0;
  transition: opacity 500ms;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  width: 100%;
  z-index: 1;

  &.hiding {
    visibility: visible;
  }
`;

const StyledButton = styled.button`
  align-items: center;
  background: none;
  border: 1px solid ${color.lightGray};
  border-radius: ${baseline};
  display: flex;
  justify-content: space-around;
  margin-bottom: calc(6 * ${baseline});
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: calc(3 * ${baseline});
  top: calc(3 * ${baseline});
  z-index: 1;

  &:hover {
    cursor: pointer;
  }

  && {
    font-size: calc(12 * ${baseline});
  }
`;

const StyledImage = styled(GatsbyImage)`
  border-radius: ${baseline};
  display: inline-block;
  height: auto;
  width: 100%;
`;

const StyledPageButtons = styled(PageButtons)`
  margin-bottom: calc(6 * ${baseline});
`;

type Image = {
  description?: string;
  file: {
    details: {
      image: {
        width: number;
      };
    };
  };
  fluid: FluidObject;
  id: string;
};

type Props = {
  data: {
    contentfulImageGallery: {
      description?: {
        json: Document;
      };
      images: Image[];
      title: string;
    };
  };
  pageContext: {
    nextSlug?: string;
    prevSlug?: string;
  };
};

const ImageGalleryTemplate: React.FC<Props> = ({ data, pageContext }) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const images = data.contentfulImageGallery.images.map(image => (
    <StyledButton key={image.id} onClick={() => setSelectedImage(image)}>
      <StyledImage alt={image.description ?? ''} fluid={image.fluid} />
    </StyledButton>
  ));

  return (
    <>
      <SEO title={data.contentfulImageGallery.title} />
      <Layout>
        <h1>{data.contentfulImageGallery.title}</h1>
        <Container>
          {data.contentfulImageGallery.description &&
            documentToReactComponents(
              data.contentfulImageGallery.description.json
            )}
        </Container>
        <Columns>{images}</Columns>
        <Modal
          isVisible={!!selectedImage}
          onClick={() => setSelectedImage(null)}
        >
          <StyledFontAwesomeIcon color={color.ucc.red} icon="times" />
          {selectedImage && (
            <SelectedImageContainer
              maxWidth={selectedImage.file.details.image.width}
            >
              <SelectedImage fluid={selectedImage.fluid} objectFit="contain" />
            </SelectedImageContainer>
          )}
        </Modal>
        <Container>
          <ShareSection contentType="image gallery" />
          {(pageContext.nextSlug || pageContext.prevSlug) && (
            <StyledPageButtons
              nextSlug={pageContext.nextSlug}
              prevSlug={pageContext.prevSlug}
              rootSlug="images"
            />
          )}
        </Container>
      </Layout>
    </>
  );
};

export default ImageGalleryTemplate;
