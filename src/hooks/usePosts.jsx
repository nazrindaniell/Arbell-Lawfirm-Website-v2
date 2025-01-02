import { useEffect, useState } from "react";
import { getBlogPosts } from "/contentful";

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const blogPosts = await getBlogPosts();
      setPosts(blogPosts);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return [posts, isLoading];
}
