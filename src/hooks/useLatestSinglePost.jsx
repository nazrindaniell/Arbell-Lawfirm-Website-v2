import { useEffect, useState } from "react";
import { getLatestBlogPost } from "/contentful";

export default function useLatestBlogPost() {
  const [post, setPost] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const blogPost = await getLatestBlogPost();
        setPost(blogPost);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  return [post, isLoading, error];
}
