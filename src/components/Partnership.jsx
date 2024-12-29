import HeaderImg from "../assets/hero-header.webp";
import React from "react";

function Partnership() {
  return (
    <div className="border-black container mx-auto py-8 lg:flex">
      <div className="flex w-full flex-col gap-10">
        <h2 className="text-center font-serif text-3xl font-bold lg:text-4xl">
          Who trusted us
        </h2>
        <div className="lg:align-center grid grid-cols-2 place-items-center gap-5 lg:flex lg:flex-wrap lg:justify-center lg:gap-2">
          <img
            src={HeaderImg}
            alt="Partner 1"
            className="w-full lg:aspect-[3/2] lg:w-[120px] lg:flex-1 lg:object-contain"
          />
          <img
            src={HeaderImg}
            alt="Partner 2"
            className="w-full lg:aspect-[3/2] lg:w-[120px] lg:flex-1 lg:object-contain"
          />
          <img
            src={HeaderImg}
            alt="Partner 3"
            className="w-full lg:aspect-[3/2] lg:w-[120px] lg:flex-1 lg:object-contain"
          />
          <img
            src={HeaderImg}
            alt="Partner 4"
            className="w-full lg:aspect-[3/2] lg:w-[120px] lg:flex-1 lg:object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Partnership;
