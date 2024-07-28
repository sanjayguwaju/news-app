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
          heroPosts {
            id
            author
            title
            media {
              url
            }
          }
        }
        ... on RecentBlock {
          blockType
          id
          recentPosts {
            id
            author
            publishDate
            title
          }
        }
      }
    }
  }
`;
