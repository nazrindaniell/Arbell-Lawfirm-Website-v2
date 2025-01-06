import HeaderImg from "../assets/hero-header.webp";
import SampleImg from "../assets/sample-img.webp";
import WhyUsCard from "../components/WhyUsCard";
import Partnership from "../components/Partnership";
import Faq from "../components/Faq";
import LearnMoreButton from "../components/LearnMoreButton";
import Posts from "../components/contentful/Posts";

function Home() {
  return (
    <>
      <section className="container mx-auto py-8 lg:flex">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="font-serif text-4xl font-bold lg:text-5xl">
            <span className="italic text-orange">Solving</span> your problems
            head-on.
          </h1>
          <p className="text-base text-black-200 lg:text-lg">
            Our expert legal audit consultants help you
            <span className="font-bold text-black">
              stay compliant, reduce risk,
            </span>
            and
            <span className="font-bold text-black"> focus on growth.</span>
            Secure your future with confidence partner with us.
          </p>
          <LearnMoreButton to="#">Learn More</LearnMoreButton>
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
        <div className="flex flex-col gap-8">
          <h1 className="font-serif text-4xl font-bold lg:text-5xl">Why us?</h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <WhyUsCard
              number="01"
              title="Lorem ipsum dolor sit."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
              imgSrc={SampleImg}
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
              imgSrc={SampleImg}
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
      {/* Blog section */}
      <section className="container mx-auto mb-10 mt-6 lg:mb-20 lg:mt-12">
        <Posts />
      </section>
      {/* who trusted us */}
      <section className="mb-6 mt-24 border-y border-white-300 lg:my-14">
        <Partnership />
      </section>
      {/* faq */}
      <section className="container mx-auto mb-8 py-8 lg:mb-14">
        <Faq />
      </section>
    </>
  );
}

export default Home;
