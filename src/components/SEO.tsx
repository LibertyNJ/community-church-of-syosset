import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

type Props = {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
};

const SEO: React.FC<Props> = ({
  description = '',
  lang = 'en',
  meta = [],
  title,
}) => {
  const data = useStaticQuery(
    graphql`
      query SEOComponent {
        contentfulJsonObject(title: { eq: "Website Data" }) {
          json {
            siteMetadata {
              description
              title
            }
          }
        }
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  );

  const metaDescription =
    description || data.contentfulJsonObject.json.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.contentfulJsonObject.json.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: location.href,
        },
        // {
        //   property: 'og:image',
        //   content: '',
        // },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: data.site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
