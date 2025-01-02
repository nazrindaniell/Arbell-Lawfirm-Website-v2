import { useEffect, useState } from "react";
import { getSinglePost } from "/contentful";

export default function useSinglePost(slug) {
  const [post, setPost] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const result = await getSinglePost(slug);
      setPost(result[0].fields);
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  return [post, isLoading];
}
