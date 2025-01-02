import { useEffect, useState } from "react";
import LearnMoreButton from "../LearnMoreButton";
import { getBlogPosts } from "/contentful";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getBlogPosts();
        setPosts(fetchedPosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const renderPosts = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return posts.map((post) => (
      <SwiperSlide key={post.sys.id}>
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
            <p className="line-clamp-5 text-base text-black-200 lg:text-lg">
              {post.fields.paragraph}
            </p>
            <LearnMoreButton to={`/blog/${post.fields.slug}`}>
              Learn More
            </LearnMoreButton>
          </div>
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-serif text-4xl lg:text-5xl">More Updates.</h1>
      <div className="relative w-full">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              pagination: {
                clickable: true,
              },
              navigation: false,
              autoHeight: true,
            },
            1024: {
              slidesPerView: 2,
              pagination: false,
              navigation: {
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              },
            },
            1280: {
              slidesPerView: 3,
              pagination: false,
              navigation: {
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              },
            },
          }}
        >
          {renderPosts()}
        </Swiper>
        <div className="custom-swiper-button-prev hidden lg:block">
          <RiArrowLeftSFill size={80} />
        </div>
        <div className="custom-swiper-button-next hidden lg:block">
          <RiArrowRightSFill size={80} />
        </div>
        <div className="swiper-pagination !-bottom-12 block lg:hidden"></div>
      </div>
    </div>
  );
}

export default Posts;
