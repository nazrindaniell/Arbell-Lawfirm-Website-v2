import Header from "../components/Header";
import GalleryHeader from "../components/GalleryHeader";
import GalleryImg from "../assets/sample-img.webp";
import Partnership from "../components/Partnership";
import Faq from "../components/Faq";
import LearnMoreButton from "../components/LearnMoreButton";
import PodcastImg from "../assets/podcast-sample.webp";

function Blog() {
  return (
    <>
      {/* Header */}
      <section className="container mx-auto py-12 lg:py-20">
        <Header
          heading="Coming Soon."
          subheading="Stay informed with our latest insights, legal updates, and expert publications."
          desc="At Arbell, we provide a complete suite of legal services designed to resolve disputes and protect your interests. Whether navigating complex litigation, reaching strategic agreements through negotiation, or finding common ground in mediation, our experts are here to support you. With a commitment to excellence and a focus on tailored solutions, we help you move forward confidently, no matter the challenge."
        />
      </section>
      {/* Gallery */}
      <section>
        <GalleryHeader imgSrc={GalleryImg} />
      </section>

      {/* Blog Posts */}
      <section className="container mx-auto mt-16 py-10 lg:mb-8 lg:mt-24 lg:py-20">
        <div className="flex flex-col gap-10">
          <h1 className="font-serif text-4xl lg:text-5xl">Latest Updates.</h1>
          <div className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="h-full w-full">
              <img
                src={PodcastImg}
                alt="Blog Img"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-3xl lg:text-4xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi.
              </h2>
              <p className="text-base text-black-200 lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices
                mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
              </p>
              <LearnMoreButton to="#">Learn More</LearnMoreButton>
            </div>
          </div>
        </div>
      </section>

      {/* who trusted us */}
      <section className="my-6 border-y border-white-300 lg:my-14">
        <Partnership />
      </section>
      {/* faq */}
      <section className="container mx-auto mb-8 py-8 lg:mb-14">
        <Faq />
      </section>
    </>
  );
}
export default Blog;
