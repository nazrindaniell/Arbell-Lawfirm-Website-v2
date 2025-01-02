import { useEffect, useState } from "react";
import { getLatestBlogPost } from "/contentful";

export default function useLatestBlogPost() {
  const [post, setPost] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const blogPost = await getLatestBlogPost();
      setPost(blogPost);
      setLoading(false);
    };

    fetchPost();
  }, []);

  return [post, isLoading];
}
