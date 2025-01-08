import { useEffect } from "react";
import Header from "../components/Header";
import GalleryHeader from "../components/GalleryHeader";
import GalleryImg from "../assets/sample-img.webp";
import Partnership from "../components/Partnership";
import Faq from "../components/Faq";

import Posts from "../components/contentful/Posts";
import LatestBlogPost from "../components/contentful/LatestSingleBlog";

function Blog() {
  useEffect(() => {
    document.title = "Blog - Arbell";
  }, []);
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

      {/* Latest Blog Posts */}
      <section className="container mx-auto mt-16 py-10 lg:mt-24 lg:pt-20">
        <div className="flex flex-col gap-8">
          <h1 className="font-serif text-4xl lg:text-5xl">Latest Updates.</h1>
          <LatestBlogPost />
        </div>
      </section>

      {/* Blog section */}
      <section className="container mx-auto my-12 lg:my-24">
        <Posts />
      </section>

      {/* who trusted us */}
      <section className="my-12 border-y border-white-300 lg:my-16">
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
