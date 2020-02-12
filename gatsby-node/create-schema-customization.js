module.exports = ({ actions: { createTypes } }) => {
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
