import { useEffect, useState } from "react";
import { getSinglePost } from "/contentful";

export default function useSinglePost(slug) {
  const [post, setPost] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const result = await getSinglePost(slug);
        setPost(result[0].fields);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return [post, isLoading, error];
}
