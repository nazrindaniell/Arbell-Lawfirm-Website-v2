import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import LearnMoreButton from "./LearnMoreButton";

function WhyUsCard({ number, title, description, imgSrc, linkSrc, reverse }) {
  return (
    <div
      className={`flex ${reverse ? "flex-col lg:flex-col-reverse" : "flex-col"}`}
    >
      <div className="md:aspect-square">
        <LazyLoadImage
          src={imgSrc}
          alt={title}
          className="h-52 w-full object-cover object-center md:h-full"
          effect="blur"
          width={"100%"}
          height={"100%"}
          fetchpriority="low"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-3 p-4">
        <h2 className="font-serif text-3xl text-orange lg:text-4xl">
          {number}
        </h2>
        <h4 className="font-serif text-xl lg:text-2xl">{title}</h4>
        <p className="text-base text-black-200 lg:text-lg">{description}</p>
        <LearnMoreButton to={linkSrc}>Learn More</LearnMoreButton>
      </div>
    </div>
  );
}

export default WhyUsCard;
