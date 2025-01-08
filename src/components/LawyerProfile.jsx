import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function LawyerProfile({ imgSrc, name, title, desc, linkedIn, instagram }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="h-80 w-full">
        <LazyLoadImage
          src={imgSrc}
          alt="Lawyer Profile Img"
          className="h-full w-full object-cover object-top"
          width={"100%"}
          height={"100%"}
          effect="blur"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-serif text-3xl lg:text-4xl">{name}</h1>
          <h4 className="text-lg lg:text-xl">{title}</h4>
        </div>
        <p className="text-base text-black-200 lg:text-lg">{desc}</p>
        <div className="flex gap-4">
          <a href={linkedIn}>
            <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
          </a>
          <a href={instagram}>
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LawyerProfile;
