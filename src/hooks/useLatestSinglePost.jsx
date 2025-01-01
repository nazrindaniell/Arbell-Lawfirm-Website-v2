import { useEffect, useState } from "react";
import { getLatestBlogPost } from "/contentful";

const promise = getLatestBlogPost();

export default function useLatestBlogPost() {
  const [post, setPost] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((blogPost) => {
      setPost(blogPost);
      setLoading(false);
    });
  }, []);

  return [post, isLoading];
}
