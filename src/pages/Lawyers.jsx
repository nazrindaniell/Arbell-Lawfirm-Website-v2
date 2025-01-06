import { useEffect } from "react";
import Header from "../components/Header";
import GalleryHeader from "../components/GalleryHeader";
import GalleryImg from "../assets/sample-img.webp";
import LawyerProfile from "../components/LawyerProfile";
import LawyerImg from "../assets/lawyer-img.webp";
import LawyerImg2 from "../assets/lawyer-img2.webp";
import Partnership from "../components/Partnership";
import Faq from "../components/Faq";

function Lawyers() {
  useEffect(() => {
    document.title = "Lawyers - Arbell";
  }, []);

  return (
    <>
      {/* Header */}
      <section className="container mx-auto py-12 lg:py-20">
        <Header
          heading="Meet Our Professionals."
          subheading="Your Path to Legal Resolution."
          desc="Driven by excellence and dedication, our professionals bring a diverse range of expertise to the table. Each member is committed to providing strategic insights and solutions tailored to your unique needs. Together, we work to empower your business, ensuring it’s positioned for growth and resilience in an ever-changing landscape."
        />
      </section>
      {/* Gallery */}
      <section>
        <GalleryHeader imgSrc={GalleryImg} />
      </section>
      {/* Lawyers */}
      <section className="container mx-auto mt-16 py-10 lg:mb-8 lg:mt-24 lg:py-20">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {/* Lawyer Profile 1*/}
          <LawyerProfile
            imgSrc={LawyerImg}
            name="Martin Octavianus"
            title="10+ years in corporate law, expert in mergers and acquisitions"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien"
            linkedIn="https://www.linkedin.com/in/nazrindaniell/"
            instagram="https://www.instagram.com/nazrindaniell/"
          />
          {/* Lawyer Profile 2*/}
          <LawyerProfile
            imgSrc={LawyerImg2}
            name="H.A.P Sianturi SH,LL.M"
            title="10+ years in investigative auditor, expert in dispute resolution"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien"
            linkedIn="#"
            instagram="#"
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
export default Lawyers;
