import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

SermonTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulSermon: PropTypes.object.isRequired,
  }).isRequired,
};

export default function SermonTemplate({ data, ...restProps }) {
  return (
    <>
      <SEO title={data.contentfulSermon.title} />
      <Layout {...restProps}>
        <h1>{data.contentfulSermon.title}</h1>
        <p>{data.contentfulSermon.date}</p>
        <Link to={`/people/${data.contentfulSermon.preacher.slug}`}>
          <div>
            <p>{data.contentfulSermon.preacher.name}</p>
            <p>{data.contentfulSermon.preacher.role}</p>
          </div>
        </Link>
        <section>
          <h2>Audio</h2>
          <audio
            controls
            preload="metadata"
            src={data.contentfulSermon.audio.file.url}
          >
            Your browser does not support the HTML5
            <code>audio</code> element.
          </audio>
        </section>
        <section>
          <h2>Video</h2>
          <video
            controls
            preload="metadata"
            src={data.contentfulSermon.video.file.url}
          >
            Your browser does not support the HTML <code>video</code> element.
          </video>
        </section>
        <section>
          <h2>Transcript</h2>
          <p>{data.contentfulSermon.transcript.transcript}</p>
        </section>
      </Layout>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    contentfulSermon(slug: { eq: $slug }) {
      audio {
        file {
          url
        }
      }
      date
      preacher {
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        name
        role
        slug
      }
      title
      transcript {
        transcript
      }
      video {
        file {
          url
        }
      }
    }
  }
`;
