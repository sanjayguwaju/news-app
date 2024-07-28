import { contentGQLQuery } from './fetch'; // Adjust the import path as necessary

const HOMEPAGE_LAYOUT_QUERY = `
  query HomepageLayout {
    HomepageLayout {
      layout {
        ... on Heroblock {
          postOne {
            author
            id
            title
            publishDate
            media {
              url
            }
          }
        }
      }
    }
  }
`;

interface Media {
  url: string;
}

interface Post {
  author: string;
  id: string;
  title: string;
  publishDate: string;
  media: Media;
}

interface HeroBlock {
  postOne: Post;
}

interface Layout {
  layout: HeroBlock[];
}

interface HomepageLayoutData {
  HomepageLayout: Layout;
}

export const fetchHomepageLayout = async () => {
  try {
    const data = await contentGQLQuery<HomepageLayoutData>({
      query: HOMEPAGE_LAYOUT_QUERY,
    });

    if (data) {
      console.log('Homepage Layout:', data.HomepageLayout);
    }
  } catch (error) {
    console.error('Error fetching homepage layout:', error);
  }
};

fetchHomepageLayout();