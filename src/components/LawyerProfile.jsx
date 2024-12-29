import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function LawyerProfile({ imgSrc, name, title, desc, linkedIn, instagram }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="h-80 w-full">
        <img
          src={imgSrc}
          alt="Lawyer Profile Img"
          className="md h-full w-full object-cover object-top"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-serif text-3xl lg:text-4xl">{name}</h1>
          <h4 className="text-lg font-medium lg:text-xl">{title}</h4>
        </div>
        <div>{desc}</div>
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
