import Header from "../components/Header";
import GalleryHeader from "../components/GalleryHeader";
import GalleryImg from "../assets/sample-img.webp";

function Contact() {
  return (
    <>
      <section className="container mx-auto py-12 lg:py-20">
        <Header
          heading="Contact Us."
          subheading="Get in touch with us for expert guidance and personalized support."
          desc="At Arbell, we provide a complete suite of legal services designed to resolve disputes and protect your interests. Whether navigating complex litigation, reaching strategic agreements through negotiation, or finding common ground in mediation, our experts are here to support you. With a commitment to excellece and a focus on tailored solutions, we help you move forward confidently, no matter the challenge."
        />
      </section>
      <section>
        <GalleryHeader imgSrc={GalleryImg} />
      </section>
    </>
  );
}
export default Contact;
