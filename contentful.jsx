import { createClient } from "contentful";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

const getBlogPosts = () =>
  client
    .getEntries({ content_type: "blogPost" })
    .then((response) => response.items);

const getSinglePost = (slug) =>
  client
    .getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
    })
    .then((response) => response.items);

const getLatestBlogPost = () =>
  client
    .getEntries({
      content_type: "blogPost",
      limit: 1,
    })
    .then((response) => response.items);

export { getBlogPosts, getSinglePost, getLatestBlogPost };
