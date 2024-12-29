import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function ContactSocialMedia() {
  return (
    <>
      <div className="flex w-full flex-col gap-3 md:w-1/4 md:self-end lg:gap-5">
        <h1 className="font-serif text-4xl lg:text-5xl">Follow Us.</h1>
        <p className="text-base text-black-200 lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna.
        </p>
        <div className="flex gap-5">
          <a href="#">
            <FontAwesomeIcon icon={faLinkedinIn} size="2xl" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </a>
        </div>
      </div>
    </>
  );
}

export default ContactSocialMedia;
