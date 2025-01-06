import FooterLogo from "../assets/Arbell_Logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-white-200">
        <div className="">
          <div className="container mx-auto flex flex-col items-center justify-center gap-10 py-10">
            <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
              <div className="flex w-full flex-col gap-4 lg:w-[60%]">
                <img src={FooterLogo} alt="Arbell Logo" className="h-10 w-36" />
                <p className="text-base text-black-200 lg:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="flex flex-1 flex-col gap-3 lg:gap-5">
                  <h4 className="font-serif text-lg lg:text-2xl">Contact Us</h4>
                  <div className="flex flex-col gap-1 [&>a]:text-base [&>a]:text-black-200 lg:[&>a]:text-lg">
                    <a href="#">+62-821-7890</a>
                    <a href="#">hello@arbell.com</a>
                    <a href="#">Tower 2 Sentrum, South Jakarta</a>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <h4 className="font-serif text-lg lg:text-2xl">
                      Connect with us
                    </h4>
                    <p className="text-base text-black-200 lg:text-lg">
                      Let's stay connected, reach out anytime!
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="relative h-10 w-10 rounded-full bg-white"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="lg"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                      />
                    </a>
                    <a
                      href="#"
                      className="relative h-10 w-10 rounded-full bg-white"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        size="lg"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white-400">
            <div className="container mx-auto py-4">
              <p className="text-center text-base text-black-200 md:text-right lg:text-lg">
                &copy; {currentYear} Arbell Consultant, All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
