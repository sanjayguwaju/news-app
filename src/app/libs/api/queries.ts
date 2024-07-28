// lib/queries.js
export const HOMEPAGE_LAYOUT_QUERY = `
  query Query {
    HomepageLayout {
      title
      slug
      sections {
        ... on HeroBlock {
          id
          blockType
          blockPosts {
            id
            author
            title
            publishDate
            media {
              url
            }
          }
          blockName
        }
        ... on RecentBlock {
          blockType
          id
          blockPosts {
            id
            author
            publishDate
            title
            media {
              url
            }
          }
          blockName
        }
        ... on SportBlock {
          blockType
          blockName
          id
          blockPosts {
            id
            author
            publishDate
            title
            media {
              url
            }
          }
        }
        ... on NationalBlock {
          blockType
          blockName
          id
          blockPosts {
            id
            author
            publishDate
            title
            media {
              url
            }
          }
        }
        ... on PoliticsBlock {
          blockType
          blockName
          id
          blockPosts {
            id
            author
            publishDate
            title
            media {
              url
            }
          }
        }
        ... on SocialBlock {
          blockType
          blockName
          id
          blockPosts {
            id
            author
            publishDate
            title
            media {
              url
            }
          }
        }
        ... on TechnologyBlock {
          blockType
          blockName
          id
          blockPosts {
            id
            author
            publishDate
            title
            media {
              url
            }
          }
        }
        ... on EntertainmentBlock {
          blockType
          blockName
          id
          blockPosts {
            id
            author
            publishDate
            title
            media {
              url
            }
          }
        }
      }
    }
  }
`;
