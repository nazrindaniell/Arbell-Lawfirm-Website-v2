import { Link, useParams } from "react-router-dom";
import { useSinglePost } from "../../hooks/useSinglePost";

function SinglePost() {
  const { id } = useParams();
  const [post, isLoading] = useSinglePost(id);

  const renderPost = () => {
    if (isLoading) return <p>Loading...</p>;

    return (
      <>
        <div className="flex flex-col gap-10">
          <h2 className="font-serif text-3xl lg:text-4xl">{post.title}</h2>
          <div className="flex flex-col gap-8 md:block">
            <img
              className="shape-outside float-left h-full w-full object-cover object-center lg:mb-10 lg:mr-10 lg:h-[500px] lg:w-[500px]"
              src={post.image.fields.file.url}
              alt={post.title}
            />
            <p className="text-justify text-base text-black-200 lg:text-xl">
              {post.paragraph}
            </p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container mx-auto my-8">
        <div className="flex flex-col gap-8">
          <Link className="" to="/blog">
            {"< Back"}
          </Link>
          {renderPost()}
        </div>
      </div>
    </>
  );
}
export default SinglePost;
