import { createClient } from "contentful";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

const getBlogPosts = async () => {
  const response = await client.getEntries({ content_type: "blogPost" });
  return response.items;
};

const getSinglePost = async (slug) => {
  const response = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
  });
  return response.items;
};

const getLatestBlogPost = async () => {
  const response = await client.getEntries({
    content_type: "blogPost",
    order: "-sys.createdAt",
    limit: 1,
  });
  return response.items[0];
};

export { getBlogPosts, getSinglePost, getLatestBlogPost };
