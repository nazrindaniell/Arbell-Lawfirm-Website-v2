import Header from "../components/Header";
import Partnership from "../components/Partnership";
import Faq from "../components/Faq";
import GalleryHeader from "../components/GalleryHeader";
import GalleryImg from "../assets/sample-img.webp";
import HeaderImg from "../assets/hero-header.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <>
      {/* Header */}
      <section className="container mx-auto py-12 lg:py-20">
        <Header
          heading="About Us."
          subheading="Commited to excellence."
          desc="lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. "
        />
      </section>
      {/* Gallery */}
      <section>
        <GalleryHeader imgSrc={GalleryImg} />
      </section>
      {/* About Content*/}
      <section className="container mx-auto my-32 py-8">
        <div className="grid grid-cols-1 gap-20">
          {/* 1st row */}
          <div className="grid grid-cols-1 place-items-center gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-3xl lg:text-4xl">Our Vision.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi.Aliquam in hendrerit urna. Pellentesque sit amet sapien
              </p>
              <a
                href="#"
                className="learn-more-btn flex w-fit items-center justify-center gap-3"
              >
                Learn more <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </div>
            <div className="h-96 w-full">
              <img
                src={GalleryImg}
                alt="Our Vision Img"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          {/* 2nd row */}
          <div className="grid grid-cols-1 place-items-center gap-10 lg:grid-cols-2">
            <div className="h-96 w-full">
              <img
                src={GalleryImg}
                alt="Our Vision Img"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="order-first flex flex-col gap-4 lg:order-last">
              <h2 className="font-serif text-3xl lg:text-4xl">Our Vision.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi.Aliquam in hendrerit urna. Pellentesque sit amet sapien{" "}
              </p>
              <a
                href="#"
                className="learn-more-btn flex w-fit items-center justify-center gap-3"
              >
                Learn more <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* who trusted us */}
      <section className="my-6 border-y border-white-300 lg:my-14">
        <Partnership
          img1={HeaderImg}
          img2={HeaderImg}
          img3={HeaderImg}
          img4={HeaderImg}
        />
      </section>
      {/* faq */}
      <section className="container mx-auto mb-8 py-8 lg:mb-14">
        <Faq />
      </section>
    </>
  );
}
export default About;
