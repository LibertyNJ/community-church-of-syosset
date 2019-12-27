import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const dateFormatOptions = {
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  month: 'long',
  weekday: 'long',
  year: 'numeric',
};

EventTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulEvent: PropTypes.shape({
      dateAndTime: PropTypes.string.isRequired,
      details: PropTypes.shape({ json: PropTypes.object }),
      title: PropTypes.string.isRequired,
      location: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lon: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default function EventTemplate({
  data: {
    contentfulEvent: { dateAndTime, details, location, title },
  },
  ...restProps
}) {
  const date = new Date(dateAndTime);
  const dateString = date.toLocaleString('en-US', dateFormatOptions);

  return (
    <>
      <SEO title={title} />
      <Layout {...restProps}>
        <h1>{title}</h1>
        <p>{dateString}</p>
        <p>
          Coordinates: {location.lat}, {location.lon}
        </p>
        {documentToReactComponents(details.json)}
      </Layout>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    contentfulEvent(slug: { eq: $slug }) {
      dateAndTime
      details {
        json
      }
      location {
        lat
        lon
      }
      title
    }
  }
`;
