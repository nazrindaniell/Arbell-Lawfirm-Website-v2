import { createClient } from "contentful";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

const getBlogPosts = async () => {
  try {
    const response = await client.getEntries({ content_type: "blogPost" });
    return response.items;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
};

const getSinglePost = async (slug) => {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
    });
    return response.items;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    throw error;
  }
};

const getLatestBlogPost = async () => {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      order: "-sys.createdAt",
      limit: 1,
    });
    return response.items[0];
  } catch (error) {
    console.error("Error fetching latest blog post:", error);
    throw error;
  }
};

export { getBlogPosts, getSinglePost, getLatestBlogPost };
