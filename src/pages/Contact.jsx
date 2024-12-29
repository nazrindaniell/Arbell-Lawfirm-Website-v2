import Header from "../components/Header";
import GalleryHeader from "../components/GalleryHeader";
import GalleryImg from "../assets/sample-img.webp";
import ContactDetails from "../components/ContactDetails";
import ContactSocialMedia from "../components/ContactSocialMedia";
import Partnership from "../components/Partnership";
import Faq from "../components/Faq";

function Contact() {
  return (
    <>
      {/* header */}
      <section className="container mx-auto py-12 lg:py-20">
        <Header
          heading="Contact Us."
          subheading="Get in touch with us for expert guidance and personalized support."
          desc="At Arbell, we provide a complete suite of legal services designed to resolve disputes and protect your interests. Whether navigating complex litigation, reaching strategic agreements through negotiation, or finding common ground in mediation, our experts are here to support you. With a commitment to excellece and a focus on tailored solutions, we help you move forward confidently, no matter the challenge."
        />
      </section>
      {/* gallery header */}
      <section>
        <GalleryHeader imgSrc={GalleryImg} />
      </section>
      {/* contact details */}
      <section className="container mx-auto mt-16 py-10 lg:mb-8 lg:mt-24 lg:py-20">
        <div className="flex flex-col gap-14 md:gap-5">
          <ContactDetails />
          <ContactSocialMedia />
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
export default Contact;
