import { useEffect, useState, useRef } from "react";
import LearnMoreButton from "../LearnMoreButton";
import { getBlogPosts } from "/contentful";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
        if (fetchedPosts.length === 0) {
          setError("No blog post available at the moment");
        } else {
          setPosts(fetchedPosts);
        }
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
            <LazyLoadImage
              className="h-60 w-full object-cover object-center md:h-80 lg:h-72"
              src={post.fields.image.fields.file.url}
              alt={post.fields.title}
              width={"100%"}
              effect="blur"
              loading="lazy"
            />
            <h3 className="line-clamp-1 font-serif text-2xl lg:text-3xl">
              {post.fields.title}
            </h3>
            <p className="line-clamp-5 text-base text-black-200 lg:text-lg">
              {post.fields.description}
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
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          pagination={{
            enabled: true,
            clickable: true,
            type: "bullets",
            el: ".swiper-pagination",
          }}
          breakpoints={{
            320: {
              pagination: {
                enabled: true,
                clickable: true,
              },
              navigation: {
                enabled: false,
              },
              slidesPerView: 1,
            },
            1024: {
              navigation: {
                enabled: true,
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              },
              pagination: {
                enabled: false,
              },
              slidesPerView: 2,
            },
            1280: {
              navigation: {
                enabled: true,
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              },
              pagination: {
                enabled: false,
              },
              slidesPerView: 3,
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
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default Posts;
