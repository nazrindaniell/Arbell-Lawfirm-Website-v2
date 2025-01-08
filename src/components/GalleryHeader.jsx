import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function GalleryHeader({ imgSrc }) {
  return (
    <>
      <div className="relative my-10 h-64 w-full bg-white-200 lg:h-72">
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 transform lg:h-96 lg:w-96">
          <LazyLoadImage
            src={imgSrc}
            alt="Header Gallery Img"
            className="h-full w-full object-cover object-center"
            width={"100%"}
            height={"100%"}
            fetchpriority="high"
            effect="blur"
          />
        </div>
      </div>
    </>
  );
}
export default GalleryHeader;
