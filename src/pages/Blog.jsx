import Header from "../components/Header";
import GalleryHeader from "../components/GalleryHeader";
import GalleryImg from "../assets/sample-img.webp";

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
    </>
  );
}
export default Blog;
