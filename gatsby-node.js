const axios = require('axios');
const path = require('path');

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  const typeDefinitions = `
    type contentfulImageGalleryDescriptionRichTextNode implements Node @derivedTypes @dontInfer {
      content: [contentfulImageGalleryDescriptionRichTextNodeContent]
      nodeType: String
      description: String
    }
    
    type contentfulImageGalleryDescriptionRichTextNodeContent @derivedTypes {
      content: [contentfulImageGalleryDescriptionRichTextNodeContentContent]
      nodeType: String
    }
    
    type contentfulImageGalleryDescriptionRichTextNodeContentContent {
      value: String
      nodeType: String
    }
    
    type ContentfulImageGallery implements Node @derivedTypes @dontInfer {
      title: String!
      slug: String!
      images: [ContentfulAsset!]! @link(by: "id", from: "images___NODE")
      description: contentfulImageGalleryDescriptionRichTextNode @link(by: "id", from: "description___NODE")
      spaceId: String
      contentful_id: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulImageGallerySys
      node_locale: String
    }
    
    type ContentfulImageGallerySys @derivedTypes {
      revision: Int
      contentType: ContentfulImageGallerySysContentType
    }
    
    type ContentfulImageGallerySysContentType @derivedTypes {
      sys: ContentfulImageGallerySysContentTypeSys
    }
    
    type ContentfulImageGallerySysContentTypeSys {
      type: String
      linkType: String
      id: String
      contentful_id: String
    }
  
    type ContentfulJsonObject implements Node @derivedTypes {
      title: String!
      spaceId: String
      contentful_id: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulJsonObjectSys
      node_locale: String
    }
    
    type ContentfulJsonObjectSys @derivedTypes {
      revision: Int
      contentType: ContentfulJsonObjectSysContentType
    }
    
    type ContentfulJsonObjectSysContentType @derivedTypes {
      sys: ContentfulJsonObjectSysContentTypeSys
    }
    
    type ContentfulJsonObjectSysContentTypeSys {
      type: String
      linkType: String
      id: String
      contentful_id: String
    }
    
    type contentfulMessageContentRichTextNode implements Node @dontInfer {
      content: String
      nodeType: String
    }
    
    type ContentfulMessage implements Node @derivedTypes @dontInfer {
      title: String!
      content: contentfulMessageContentRichTextNode @link(by: "id", from: "content___NODE")
      spaceId: String
      contentful_id: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulMessageSys
      node_locale: String
    }
    
    type ContentfulMessageSys @derivedTypes {
      revision: Int
      contentType: ContentfulMessageSysContentType
    }
    
    type ContentfulMessageSysContentType @derivedTypes {
      sys: ContentfulMessageSysContentTypeSys
    }
    
    type ContentfulMessageSysContentTypeSys {
      type: String
      linkType: String
      id: String
      contentful_id: String
    }
    
    type ContentfulMission implements Node @derivedTypes @dontInfer {
      name: String!
      url: String
      image: ContentfulAsset @link(by: "id", from: "image___NODE")
      spaceId: String
      contentful_id: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulMissionSys
      node_locale: String
    }
    
    type ContentfulMissionSys @derivedTypes {
      revision: Int
      contentType: ContentfulMissionSysContentType
    }
    
    type ContentfulMissionSysContentType @derivedTypes {
      sys: ContentfulMissionSysContentTypeSys
    }
    
    type ContentfulMissionSysContentTypeSys {
      type: String
      linkType: String
      id: String
      contentful_id: String
    }
    
    type ContentfulContentList implements Node @derivedTypes {
      title: String!
      spaceId: String
      contentful_id: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulContentListSys
      node_locale: String
    }
    
    type ContentfulPerson implements Node @derivedTypes @dontInfer {
      name: String!
      role: String!
      slug: String!
      image: ContentfulAsset @link(by: "id", from: "image___NODE")
      sermon: [ContentfulSermon] @link(by: "id", from: "sermon___NODE")
      biography: contentfulPersonBiographyRichTextNode @link(by: "id", from: "biography___NODE")
      spaceId: String
      contentful_id: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulPersonSys
      node_locale: String
      content_list: [ContentfulContentList] @link(by: "id", from: "content list___NODE") @proxy(from: "content list___NODE")
    }
    
    type ContentfulSermon implements Node @derivedTypes @dontInfer {
      title: String!
      date: Date! @dateformat
      scriptureReadings: [String!]!
      slug: String!
      image: ContentfulAsset @link(by: "id", from: "image___NODE")
      preacher: ContentfulPerson! @link(by: "id", from: "preacher___NODE")
      video: ContentfulAsset @link(by: "id", from: "video___NODE")
      audio: ContentfulAsset @link(by: "id", from: "audio___NODE")
      transcript: contentfulSermonTranscriptRichTextNode @link(by: "id", from: "transcript___NODE")
      spaceId: String
      contentful_id: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulSermonSys
      node_locale: String
    }
    
    type contentfulSermonTranscriptRichTextNode implements Node @derivedTypes @dontInfer {
      content: [contentfulSermonTranscriptRichTextNodeContent]
      nodeType: String
      transcript: String
    }
    
    type contentfulSermonTranscriptRichTextNodeContent @derivedTypes {
      content: [contentfulSermonTranscriptRichTextNodeContentContent]
      nodeType: String
    }
    
    type contentfulSermonTranscriptRichTextNodeContentContent {
      value: String
      nodeType: String
    }
    
    type ContentfulSermonSys @derivedTypes {
      revision: Int
      contentType: ContentfulSermonSysContentType
    }
    
    type ContentfulSermonSysContentType @derivedTypes {
      sys: ContentfulSermonSysContentTypeSys
    }
    
    type ContentfulSermonSysContentTypeSys {
      type: String
      linkType: String
      id: String
      contentful_id: String
    }
    
    type contentfulPersonBiographyRichTextNode implements Node @derivedTypes @dontInfer {
      content: [contentfulPersonBiographyRichTextNodeContent]
      nodeType: String
      biography: String
    }
    
    type contentfulPersonBiographyRichTextNodeContent @derivedTypes {
      content: [contentfulPersonBiographyRichTextNodeContentContent]
      nodeType: String
    }
    
    type contentfulPersonBiographyRichTextNodeContentContent {
      value: String
      nodeType: String
    }
    
    type ContentfulPersonSys @derivedTypes {
      revision: Int
      contentType: ContentfulPersonSysContentType
    }
    
    type ContentfulPersonSysContentType @derivedTypes {
      sys: ContentfulPersonSysContentTypeSys
    }
    
    type ContentfulPersonSysContentTypeSys {
      type: String
      linkType: String
      id: String
      contentful_id: String
    }
    
    type ContentfulContentListSys @derivedTypes {
      revision: Int
      contentType: ContentfulContentListSysContentType
    }
    
    type ContentfulContentListSysContentType @derivedTypes {
      sys: ContentfulContentListSysContentTypeSys
    }
    
    type ContentfulContentListSysContentTypeSys {
      type: String
      linkType: String
      id: String
      contentful_id: String
    }
    
    type ContentfulSimpleList implements Node @derivedTypes @dontInfer {
      title: String!
      values: [String!]!
      spaceId: String
      contentful_id: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulSimpleListSys
      node_locale: String
    }
    
    type ContentfulSimpleListSys @derivedTypes {
      revision: Int
      contentType: ContentfulSimpleListSysContentType
    }
    
    type ContentfulSimpleListSysContentType @derivedTypes {
      sys: ContentfulSimpleListSysContentTypeSys
    }
    
    type ContentfulSimpleListSysContentTypeSys {
      type: String
      linkType: String
      id: String
      contentful_id: String
    }
    
    type contentfulEventDetailsRichTextNode implements Node @derivedTypes @dontInfer {
      content: [contentfulEventDetailsRichTextNodeContent]
      nodeType: String
      details: String
    }
    
    type contentfulEventDetailsRichTextNodeContent @derivedTypes {
      data: contentfulEventDetailsRichTextNodeContentData
      content: [contentfulEventDetailsRichTextNodeContentContent]
      nodeType: String
    }
    
    type contentfulEventDetailsRichTextNodeContentData @derivedTypes {
      target: contentfulEventDetailsRichTextNodeContentDataTarget
    }
    
    type contentfulEventDetailsRichTextNodeContentDataTarget @derivedTypes {
      sys: contentfulEventDetailsRichTextNodeContentDataTargetSys
      fields: contentfulEventDetailsRichTextNodeContentDataTargetFields
    }
    
    type contentfulEventDetailsRichTextNodeContentDataTargetSys @derivedTypes {
      space: contentfulEventDetailsRichTextNodeContentDataTargetSysSpace
      id: String
      type: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      environment: contentfulEventDetailsRichTextNodeContentDataTargetSysEnvironment
      revision: Int
      contentful_id: String
    }
    
    type contentfulEventDetailsRichTextNodeContentDataTargetSysSpace @derivedTypes {
      sys: contentfulEventDetailsRichTextNodeContentDataTargetSysSpaceSys
    }
    
    type contentfulEventDetailsRichTextNodeContentDataTargetSysSpaceSys {
      type: String
      linkType: String
      id: String
      contentful_id: String
    }
    
    type contentfulEventDetailsRichTextNodeContentDataTargetSysEnvironment @derivedTypes {
      sys: contentfulEventDetailsRichTextNodeContentDataTargetSysEnvironmentSys
    }
    
    type contentfulEventDetailsRichTextNodeContentDataTargetSysEnvironmentSys {
      id: String
      type: String
      linkType: String
      contentful_id: String
    }
    
    type contentfulEventDetailsRichTextNodeContentDataTargetFields @derivedTypes {
      title: contentfulEventDetailsRichTextNodeContentDataTargetFieldsTitle
      file: contentfulEventDetailsRichTextNodeContentDataTargetFieldsFile
    }
    
    type contentfulEventDetailsRichTextNodeContentDataTargetFieldsTitle {
      en_US: String @proxy(from: "en-US")
    }
    
    type contentfulEventDetailsRichTextNodeContentDataTargetFieldsFile @derivedTypes {
      en_US: contentfulEventDetailsRichTextNodeContentDataTargetFieldsFileEn_US @proxy(from: "en-US")
    }
    
    type contentfulEventDetailsRichTextNodeContentDataTargetFieldsFileEn_US @derivedTypes {
      url: String
      details: contentfulEventDetailsRichTextNodeContentDataTargetFieldsFileEn_USDetails
      fileName: String
      contentType: String
    }
    
    type contentfulEventDetailsRichTextNodeContentDataTargetFieldsFileEn_USDetails @derivedTypes {
      size: Int
      image: contentfulEventDetailsRichTextNodeContentDataTargetFieldsFileEn_USDetailsImage
    }
    
    type contentfulEventDetailsRichTextNodeContentDataTargetFieldsFileEn_USDetailsImage {
      width: Int
      height: Int
    }
    
    type contentfulEventDetailsRichTextNodeContentContent {
      value: String
      nodeType: String
    }
    
    type ContentfulEvent implements Node @derivedTypes @dontInfer {
      title: String!
      date: Date! @dateformat
      location: ContentfulEventLocation!
      slug: String!
      image: ContentfulAsset @link(by: "id", from: "image___NODE")
      details: contentfulEventDetailsRichTextNode @link(by: "id", from: "details___NODE")
      spaceId: String
      contentful_id: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulEventSys
      node_locale: String
    }
    
    type ContentfulEventLocation {
      lon: Float!
      lat: Float
    }
    
    type ContentfulEventSys @derivedTypes {
      revision: Int
      contentType: ContentfulEventSysContentType
    }
    
    type ContentfulEventSysContentType @derivedTypes {
      sys: ContentfulEventSysContentTypeSys
    }
    
    type ContentfulEventSysContentTypeSys {
      type: String
      linkType: String
      id: String
      contentful_id: String
    }
    
    type ContentfulContentType implements Node @dontInfer {
      name: String
      displayField: String
      description: String
    }
  `;

  createTypes(typeDefinitions);
};

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`
    {
      allContentfulEvent(filter: {date: {gt: "${new Date().toISOString()}"}}, sort: {fields: date, order: ASC}) {
        edges {
          next {
            slug
          }
          node {
            id
            location {
              lat
              lon
            }
            slug
          }
          previous {
            slug
          }
        }
      }
      allContentfulPerson {
        edges {
          node {
            id
            slug
          }
        }
      }
      allContentfulSermon(sort: {fields: date, order: DESC}) {
        edges {
          next {
            slug
          }
          node {
            id
            slug
          }
          previous {
            slug
          }
        }
      }
    }
  `);

  const events = result.data.allContentfulEvent.edges;
  await createEventPages(createPage, events);

  const people = result.data.allContentfulPerson.edges;
  createPersonPages(createPage, people);

  const sermons = result.data.allContentfulSermon.edges;
  createSermonPages(createPage, sermons);
};

async function createEventPages(createPage, events) {
  const geocodeDataCache = new Object();

  const eventPageCreations = events.map(async event => {
    const coordinates = `${event.node.location.lat},${event.node.location.lon}`;

    if (!geocodeDataCache.hasOwnProperty(coordinates)) {
      geocodeDataCache[coordinates] = await getGeocodeData(coordinates);
    }

    createPage({
      component: path.resolve('./src/templates/event.tsx'),
      context: {
        address: geocodeDataCache[coordinates].address,
        id: event.node.id,
        nextSlug: event.next && event.next.slug,
        placeId: geocodeDataCache[coordinates].placeId,
        prevSlug: event.previous && event.previous.slug,
      },
      path: `/events/${event.node.slug}`,
    });
  });

  await Promise.all(eventPageCreations);

  const ITEM_TYPE = 'events';
  const EVENTS_PER_NAVIGATION_PAGE = 12;

  const totalNavigationPages = Math.ceil(
    events.length / EVENTS_PER_NAVIGATION_PAGE
  );

  createPage({
    component: path.resolve('./src/templates/events.tsx'),
    context: {
      limit: EVENTS_PER_NAVIGATION_PAGE,
      pageIsIndex: true,
      pageNumber: 1,
      totalPages: totalNavigationPages,
    },
    path: '/events',
  });

  if (totalNavigationPages > 1) {
    createNavigationPages(
      createPage,
      totalNavigationPages,
      ITEM_TYPE,
      EVENTS_PER_NAVIGATION_PAGE
    );
  }
}

async function getGeocodeData(coordinates) {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates}&key=${process.env.GOOGLE_GEOCODING_API_KEY}`
    );

    return {
      address: createAddress(response.data.results[0].address_components),
      placeId: response.data.results[0].place_id,
    };
  } catch (error) {
    console.error(error);
  }
}

function createAddress(addressComponents) {
  const city = addressComponents.find(addressComponent =>
    addressComponent.types.includes('locality')
  ).long_name;

  const number = addressComponents.find(addressComponent =>
    addressComponent.types.includes('street_number')
  ).short_name;

  const state = addressComponents.find(addressComponent =>
    addressComponent.types.includes('administrative_area_level_1')
  ).short_name;

  const street = addressComponents.find(addressComponent =>
    addressComponent.types.includes('route')
  ).long_name;

  const zip = addressComponents.find(addressComponent =>
    addressComponent.types.includes('postal_code')
  ).short_name;

  return { city, number, state, street, zip };
}

function createPersonPages(createPage, people) {
  people.forEach(person =>
    createPage({
      component: path.resolve('./src/templates/person.tsx'),
      context: {
        id: person.node.id,
      },
      path: `/people/${person.node.slug}`,
    })
  );
}

function createSermonPages(createPage, sermons) {
  sermons.forEach(sermon =>
    createPage({
      component: path.resolve('./src/templates/sermon.tsx'),
      context: {
        id: sermon.node.id,
        nextSlug: sermon.next && sermon.next.slug,
        prevSlug: sermon.previous && sermon.previous.slug,
      },
      path: `/sermons/${sermon.node.slug}`,
    })
  );

  const ITEM_TYPE = 'sermons';
  const SERMONS_PER_NAVIGATION_PAGE = 12;

  const totalNavigationPages = Math.ceil(
    sermons.length / SERMONS_PER_NAVIGATION_PAGE
  );

  createPage({
    component: path.resolve('./src/templates/sermons.tsx'),
    context: {
      limit: SERMONS_PER_NAVIGATION_PAGE,
      pageIsIndex: true,
      pageNumber: 1,
      totalPages: totalNavigationPages,
    },
    path: '/sermons',
  });

  if (totalNavigationPages > 1) {
    createNavigationPages(
      createPage,
      totalNavigationPages,
      ITEM_TYPE,
      SERMONS_PER_NAVIGATION_PAGE
    );
  }
}

function createNavigationPages(createPage, totalPages, itemType, itemsPerPage) {
  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    createPage({
      component: path.resolve(`./src/templates/${itemType}.tsx`),
      context: {
        limit: itemsPerPage,
        pageNumber,
        skip: (pageNumber - 1) * itemsPerPage,
        totalPages,
      },
      path: `/${itemType}/page/${pageNumber}`,
    });
  }
}
