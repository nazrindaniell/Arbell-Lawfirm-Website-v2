import { useEffect } from "react";
import Header from "../components/Header";
import GalleryHeader from "../components/GalleryHeader";
import GalleryImg from "../assets/sample-img.webp";
import ServicesCard from "../components/ServicesCard";
import SampleImg from "../assets/sample-img.webp";
import Partnership from "../components/Partnership";
import Faq from "../components/Faq";

function Services() {
  useEffect(() => {
    document.title = "Services - Arbell";
  }, []);

  return (
    <>
      {/* Header */}
      <section className="container mx-auto py-12 lg:py-20">
        <Header
          heading="Our Services."
          subheading="Your Path to Legal Resolution."
          desc="At Arbell, we provide a complete suite of legal services designed to resolve disputes and protect your interests. Whether navigating complex litigation, reaching strategic agreements through negotiation, or finding common ground in mediation, our experts are here to support you. With a commitment to excellence and a focus on tailored solutions, we help you move forward confidently, no matter the challenge."
        />
      </section>
      {/* Gallery */}
      <section>
        <GalleryHeader imgSrc={GalleryImg} />
      </section>
      {/* Services content */}
      <section className="container mx-auto mt-16 py-10 lg:mb-8 lg:mt-24 lg:py-20">
        <div className="grid grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Service Card 1 */}
          <ServicesCard
            imgSrc={SampleImg}
            heading="Litigation"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fris id."
          />
          {/* Service Card 2 */}
          <ServicesCard
            imgSrc={SampleImg}
            heading="Litigation"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fris id."
          />
          {/* Service Card 3 */}
          <ServicesCard
            imgSrc={SampleImg}
            heading="Litigation"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fris id."
          />
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
export default Services;
