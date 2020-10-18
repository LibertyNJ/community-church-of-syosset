import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import CenteredTextColumn from '../components/CenteredTextColumn';
import EmbeddedGoogleMap from '../components/EmbeddedGoogleMap';
import Layout from '../components/Layout';
import PageButtons from '../components/PageButtons';
import SEO from '../components/SEO';
import ShareSection from '../components/ShareSection';
import { baseline, color } from '../style';

export const query = graphql`
  query EventTemplate($id: String!) {
    contentfulEvent(id: { eq: $id }) {
      date
      details {
        json
      }
      title
    }
  }
`;

const DATE_FORMAT_OPTIONS = {
  day: 'numeric',
  month: 'long',
  weekday: 'long',
  year: 'numeric',
};

const TIME_FORMAT_OPTIONS = {
  hour: 'numeric',
  minute: '2-digit',
  timeZoneName: 'short',
};

const StyledEmbeddedGoogleMap = styled(EmbeddedGoogleMap)`
  background-color: ${color.body};
  border-radius: ${baseline};
  margin: calc(6 * ${baseline}) 0;
`;

const StyledPageButtons = styled(PageButtons)`
  margin-bottom: calc(6 * ${baseline});
`;

type Props = {
  data: {
    contentfulEvent: {
      date: string;
      details?: {
        json: Document;
      };
      title: string;
    };
  };
  pageContext: {
    address: {
      city: string;
      number: string;
      state: string;
      street: string;
      zip: string;
    };
    nextSlug?: string;
    placeId: string;
    prevSlug?: string;
  };
};

const EventTemplate: React.FC<Props> = ({ data, pageContext }) => {
  const dateObject = new Date(data.contentfulEvent.date);

  const dateString = dateObject.toLocaleDateString(
    undefined,
    DATE_FORMAT_OPTIONS
  );

  const timeString = dateObject.toLocaleTimeString(
    undefined,
    TIME_FORMAT_OPTIONS
  );

  return (
    <>
      <SEO title={data.contentfulEvent.title} />
      <Layout>
        <CenteredTextColumn>
          <h1>{data.contentfulEvent.title}</h1>
          <section>
            <h2>Date and time</h2>
            <p>
              <time dateTime={data.contentfulEvent.date}>
                {dateString} <br />
                {timeString}
              </time>
            </p>
          </section>
          <section>
            <h2>Location</h2>
            {process.env.GATSBY_GOOGLE_MAPS_EMBED_API_KEY && (
              <StyledEmbeddedGoogleMap
                apiKey={process.env.GATSBY_GOOGLE_MAPS_EMBED_API_KEY}
                aspectRatio={{ x: 1, y: 1 }}
                mode="place"
                q={`place_id:${pageContext.placeId}`}
                title="A map of the event location"
              />
            )}
            <address>
              <p>
                {pageContext.address.number} {pageContext.address.street} <br />
                {pageContext.address.city}, {pageContext.address.state}{' '}
                {pageContext.address.zip}
              </p>
            </address>
          </section>
          {data.contentfulEvent.details && (
            <section>
              <h2>Details</h2>
              {documentToReactComponents(data.contentfulEvent.details.json)}
            </section>
          )}
          <ShareSection contentType="event" />
          {(pageContext.nextSlug || pageContext.prevSlug) && (
            <StyledPageButtons
              nextSlug={pageContext.nextSlug}
              prevSlug={pageContext.prevSlug}
              rootSlug="events"
            />
          )}
        </CenteredTextColumn>
      </Layout>
    </>
  );
};

export default EventTemplate;
