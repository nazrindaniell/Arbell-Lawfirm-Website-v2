import usePosts from "../hooks/usePosts";
import LearnMoreButton from "../components/LearnMoreButton";

function Posts() {
  const [posts, isLoading] = usePosts();

  const renderPosts = () => {
    if (isLoading) return <p>Loading...</p>;

    return posts.map((post) => (
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col justify-between gap-5">
          <img
            className="w-full object-cover object-center lg:h-72"
            src={post.fields.image.fields.file.url}
            alt={post.fields.title}
          />
          <h3 className="line-clamp-1 font-serif text-2xl lg:text-3xl">
            {post.fields.title}
          </h3>
          <p className="line-clamp-5 text-base text-black-200 lg:text-xl">
            {post.fields.paragraph}
          </p>
          <LearnMoreButton to={post.fields.slug}>Learn More</LearnMoreButton>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="font-serif text-4xl lg:text-5xl">More Updates.</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {renderPosts()}
        </div>
      </div>
    </>
  );
}

export default Posts;
