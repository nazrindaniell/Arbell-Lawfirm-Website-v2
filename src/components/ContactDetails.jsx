import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactDetails() {
  return (
    <>
      <div className="flex w-full flex-col gap-5 lg:w-1/2 lg:gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-4xl lg:text-5xl">Get In Touch.</h1>
          <p className="text-base text-black-200 lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-8">
            <FontAwesomeIcon icon={faLocationDot} size="2xl" />
            <div className="flex flex-col gap-1">
              <h4 className="font-serif text-xl lg:text-2xl">Address.</h4>
              <p className="text-base text-black-200 lg:text-lg">
                Tower 2 Sentrum, South Jakarta
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <FontAwesomeIcon icon={faPhone} size="2xl" />
            <div className="flex flex-col gap-1">
              <h4 className="font-serif text-xl lg:text-2xl">Phone No.</h4>
              <p className="text-base text-black-200 lg:text-lg">
                +62-821-7890
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
            <div className="flex flex-col gap-1">
              <h4 className="font-serif text-xl lg:text-2xl">Email Address</h4>
              <p className="text-base text-black-200 lg:text-lg">
                hello@arbell.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
