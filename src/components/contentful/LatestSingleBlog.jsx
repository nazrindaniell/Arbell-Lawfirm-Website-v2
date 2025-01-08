import { useState, useEffect } from "react";
import LearnMoreButton from "../LearnMoreButton";
import { getLatestBlogPost } from "/contentful";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function LatestBlogPost() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getLatestBlogPost();
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          setError("No blog post available at the moment.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, []);

  const renderPost = () => {
    if (isLoading)
      return (
        <div className="grid animate-pulse grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="w-fulls h-44 bg-white-200 md:h-80 lg:h-96"></div>
          <div className="flex w-full flex-col gap-6">
            <div className="h-12 bg-white-200"></div>
            <div className="flex flex-col gap-2">
              <div className="h-5 bg-white-200"></div>
              <div className="h-5 bg-white-200"></div>
              <div className="h-5 bg-white-200"></div>
              <div className="h-5 bg-white-200"></div>
              <div className="h-5 bg-white-200"></div>
            </div>
            <div className="h-10 w-40 rounded-full bg-white-200 px-5 py-2"></div>
          </div>
        </div>
      );

    if (error) return <p>Error: {error}</p>;

    return (
      <div className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-10">
        <LazyLoadImage
          className="h-60 w-full object-cover object-center md:h-80 lg:h-96"
          src={post.fields.image.fields.file.url}
          alt={post.fields.title}
          width={"100%"}
          height={"100%"}
          effect="blur"
        />
        <div className="flex flex-col gap-6">
          <h2 className="font-serif text-3xl lg:text-4xl">
            {post.fields.title}
          </h2>
          <p className="line-clamp-5 text-base text-black-200 lg:text-lg">
            {post.fields.description}
          </p>
          <LearnMoreButton key={post.fields.id} to={post.fields.slug}>
            Learn More
          </LearnMoreButton>
        </div>
      </div>
    );
  };

  return renderPost();
}

export default LatestBlogPost;
