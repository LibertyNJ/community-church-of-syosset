import { graphql, Link } from 'gatsby';
import Image, { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CenteredTextColumn from '../components/CenteredTextColumn';
import Layout from '../components/Layout';
import PageButtons from '../components/PageButtons';
import SEO from '../components/SEO';
import ShareSection from '../components/ShareSection';
import TitledList from '../components/TitledList';
import VideoPlayer from '../components/VideoPlayer';
import { baseline, color } from '../style';

export const query = graphql`
  query ServiceTemplate($id: String!) {
    contentfulService(id: { eq: $id }) {
      date
      preacher {
        image {
          description
          fixed(height: 48, width: 48) {
            ...GatsbyContentfulFixed
          }
        }
        name
        role
        slug
      }
      scriptureReadings
      title
      videoUrl
    }
  }
`;

const DATE_FORMAT_OPTIONS = {
  day: 'numeric',
  month: 'long',
  weekday: 'long',
  year: 'numeric',
};

const IconFrame = styled.div`
  align-items: center;
  border: 1px dashed ${color.body};
  border-radius: ${baseline};
  display: flex;
  height: calc(12 * ${baseline});
  justify-content: space-around;
  margin-right: calc(3 * ${baseline});
  width: calc(12 * ${baseline});
`;

const Preacher = styled.div`
  display: flex;
  margin-bottom: calc(6 * ${baseline});
`;

const PreacherDetails = styled.p`
  margin-bottom: 0;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: calc(9 * ${baseline});
`;

const StyledImage = styled(Image)`
  border-radius: ${baseline};
  margin-right: calc(3 * ${baseline});
`;

const StyledPageButtons = styled(PageButtons)`
  margin-bottom: calc(6 * ${baseline});
`;

const StyledTitledList = styled(TitledList)`
  margin-bottom: calc(6 * ${baseline});
`;

const StyledVideoPlayer = styled(VideoPlayer)`
  border-radius: ${baseline};
  margin: calc(6 * ${baseline}) 0;
`;

type Props = {
  data: {
    contentfulService: {
      date: string;
      preacher: {
        image?: {
          description?: string;
          fixed: FixedObject;
        };
        name: string;
        role: string;
        slug: string;
      };
      scriptureReadings: string[];
      title: string;
      videoUrl: string;
    };
  };
  pageContext: {
    nextSlug?: string;
    prevSlug?: string;
  };
};

const ServiceTemplate: React.FC<Props> = ({ data, pageContext }) => {
  const [year, month, day] = data.contentfulService.date.split('-');
  const dateObject = new Date(+year, +month - 1, +day);
  const dateString = dateObject.toLocaleDateString(
    undefined,
    DATE_FORMAT_OPTIONS
  );

  return (
    <>
      <SEO title={data.contentfulService.title} />
      <Layout>
        <h1>{data.contentfulService.title}</h1>
        <CenteredTextColumn>
          <Link to={`/people/${data.contentfulService.preacher.slug}`}>
            <Preacher>
              {data.contentfulService.preacher.image ? (
                <StyledImage
                  alt={data.contentfulService.preacher.image.description}
                  fixed={data.contentfulService.preacher.image.fixed}
                />
              ) : (
                <IconFrame>
                  <StyledFontAwesomeIcon icon="user" />
                </IconFrame>
              )}
              <PreacherDetails>
                <b>{data.contentfulService.preacher.name}</b> <br />
                {data.contentfulService.preacher.role}
              </PreacherDetails>
            </Preacher>
          </Link>
          <p>
            <time dateTime={data.contentfulService.date}>{dateString}</time>
          </p>
          <StyledTitledList title="Scripture readings" type="unordered">
            {data.contentfulService.scriptureReadings}
          </StyledTitledList>
          <StyledVideoPlayer url={data.contentfulService.videoUrl} />
          <ShareSection contentType="service" />
          {(pageContext.nextSlug || pageContext.prevSlug) && (
            <StyledPageButtons
              nextSlug={pageContext.nextSlug}
              prevSlug={pageContext.prevSlug}
              rootSlug="services"
            />
          )}
        </CenteredTextColumn>
      </Layout>
    </>
  );
};

export default ServiceTemplate;
