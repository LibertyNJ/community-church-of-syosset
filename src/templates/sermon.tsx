import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { graphql, Link } from 'gatsby';
import Image, { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AudioPlayer from '../components/AudioPlayer';
import Layout from '../components/Layout';
import PageButtons from '../components/PageButtons';
import SEO from '../components/SEO';
import ShareSection from '../components/ShareSection';
import TitledList from '../components/TitledList';
import VideoPlayer from '../components/VideoPlayer';
import { baseline, color } from '../style';

export const query = graphql`
  query SermonTemplate($id: String!) {
    contentfulSermon(id: { eq: $id }) {
      audio {
        file {
          url
        }
      }
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
      transcript {
        json
      }
      video {
        file {
          url
        }
      }
    }
  }
`;

const DATE_FORMAT_OPTIONS = {
  day: 'numeric',
  month: 'long',
  weekday: 'long',
  year: 'numeric',
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 33em;
`;

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

const StyledAudioPlayer = styled(AudioPlayer)`
  margin: calc(6 * ${baseline}) 0;
  width: 100%;
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
  background-color: ${color.body};
  border-radius: ${baseline};
  margin: calc(6 * ${baseline}) 0;
`;

type Props = {
  data: {
    contentfulSermon: {
      audio?: {
        file: {
          url: string;
        };
      };
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
      transcript?: {
        json: Document;
      };
      video?: {
        file: {
          url: string;
        };
      };
    };
  };
  pageContext: {
    nextSlug?: string;
    prevSlug?: string;
  };
};

const SermonTemplate: React.FC<Props> = ({ data, pageContext }) => {
  const dateObject = new Date(data.contentfulSermon.date);
  const dateString = dateObject.toLocaleDateString(
    undefined,
    DATE_FORMAT_OPTIONS
  );

  return (
    <>
      <SEO title={data.contentfulSermon.title} />
      <Layout>
        <h1>{data.contentfulSermon.title}</h1>
        <Container>
          <Link to={`/people/${data.contentfulSermon.preacher.slug}`}>
            <Preacher>
              {data.contentfulSermon.preacher.image ? (
                <StyledImage
                  alt={data.contentfulSermon.preacher.image.description}
                  fixed={data.contentfulSermon.preacher.image.fixed}
                />
              ) : (
                <IconFrame>
                  <StyledFontAwesomeIcon icon="user" />
                </IconFrame>
              )}
              <PreacherDetails>
                <b>{data.contentfulSermon.preacher.name}</b> <br />
                {data.contentfulSermon.preacher.role}
              </PreacherDetails>
            </Preacher>
          </Link>
          <p>
            <time dateTime={data.contentfulSermon.date}>{dateString}</time>
          </p>
          <StyledTitledList title="Scripture readings" type="unordered">
            {data.contentfulSermon.scriptureReadings}
          </StyledTitledList>
          {data.contentfulSermon.video && (
            <section>
              <h2>Video</h2>
              <StyledVideoPlayer
                aspectRatio={{ x: 16, y: 9 }}
                url={data.contentfulSermon.video.file.url}
              />
            </section>
          )}
          {data.contentfulSermon.audio && (
            <section>
              <h2>Audio</h2>
              <StyledAudioPlayer url={data.contentfulSermon.audio.file.url} />
            </section>
          )}
          {data.contentfulSermon.transcript && (
            <section>
              <h2>Transcript</h2>
              {documentToReactComponents(data.contentfulSermon.transcript.json)}
            </section>
          )}
          <ShareSection contentType="sermon" />
          {(pageContext.nextSlug || pageContext.prevSlug) && (
            <StyledPageButtons
              nextSlug={pageContext.nextSlug}
              prevSlug={pageContext.prevSlug}
              rootSlug="events"
            />
          )}
        </Container>
      </Layout>
    </>
  );
};

export default SermonTemplate;
