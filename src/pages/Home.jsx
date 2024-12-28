import HeaderImg from "../assets/hero-header.webp";
import WhyUsCard from "../components/WhyUsCard";
import Partnership from "../components/Partnership";
import Faq from "../components/Faq";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      <section className="container mx-auto py-8 lg:flex">
        <div className="flex flex-col justify-center gap-5">
          <h1 className="font-serif text-4xl font-bold lg:text-5xl">
            <span className="italic text-orange">Solving</span> your problems
            head-on.
          </h1>
          <p className="text-base lg:text-lg">
            Our expert legal audit consultants help you
            <span className="font-bold"> stay compliant, reduce risk,</span> and
            <span className="font-bold"> focus on growth.</span> Secure your
            future with confidence partner with us.
          </p>
          <a
            href="#"
            className="learn-more-btn flex w-fit items-center justify-center gap-3"
          >
            Learn More <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={HeaderImg}
            alt="Header Image"
            className="w-96 object-cover object-center lg:w-[550px]"
          />
        </div>
      </section>
      {/* why us */}
      <section className="container mx-auto py-8 lg:flex">
        <div className="flex flex-col gap-5">
          <h2 className="font-serif text-3xl font-bold lg:text-4xl">Why us?</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <WhyUsCard
              number="01"
              title="Lorem ipsum dolor sit."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
              imgSrc={HeaderImg}
              linkSrc={"#"}
            />
            <WhyUsCard
              number="02"
              title="Lorem ipsum dolor sit."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
              imgSrc={HeaderImg}
              linkSrc={"#"}
              reverse
            />
            <WhyUsCard
              number="03"
              title="Lorem ipsum dolor sit."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
              imgSrc={HeaderImg}
              linkSrc={"#"}
            />
            <WhyUsCard
              number="04"
              title="Lorem ipsum dolor sit."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
              imgSrc={HeaderImg}
              linkSrc={"#"}
              reverse
            />
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

export default Home;
