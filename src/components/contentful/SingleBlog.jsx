import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSinglePost } from "/contentful";
import BackButton from "../BackButton";
import Posts from "./Posts";

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getSinglePost(id);
        setPost(fetchedPost[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const renderPost = () => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <>
        <div className="flex flex-col gap-10">
          <h2 className="font-serif text-3xl lg:text-4xl">
            {post.fields.title}
          </h2>
          <div className="flex flex-col gap-8 md:block">
            <img
              className="shape-outside float-left h-full w-full object-cover object-center lg:mb-10 lg:mr-10 lg:h-[500px] lg:w-[500px]"
              src={post.fields.image.fields.file.url}
              alt={post.fields.title}
            />
            <p className="text-justify text-base text-black-200 lg:text-lg">
              {post.fields.description}
            </p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <section className="container mx-auto my-8">
        <div className="flex flex-col gap-5">
          <Link className="w-fit" to="/blog">
            <BackButton>Back</BackButton>
          </Link>
          {renderPost()}
        </div>
        <div className="my-28">
          <Posts />
        </div>
      </section>
    </>
  );
}
export default SinglePost;
