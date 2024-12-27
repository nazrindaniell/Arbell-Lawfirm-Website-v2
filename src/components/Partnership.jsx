import React from "react";

function Partnership({ img1, img2, img3, img4 }) {
  return (
    <div className="lg:align-center grid grid-cols-2 place-items-center gap-5 lg:flex lg:flex-wrap lg:justify-center lg:gap-2">
      <img
        src={img1}
        alt="Partner 1"
        className="w-full lg:aspect-[3/2] lg:w-[120px] lg:flex-1 lg:object-contain"
      />
      <img
        src={img2}
        alt="Partner 2"
        className="w-full lg:aspect-[3/2] lg:w-[120px] lg:flex-1 lg:object-contain"
      />
      <img
        src={img3}
        alt="Partner 3"
        className="w-full lg:aspect-[3/2] lg:w-[120px] lg:flex-1 lg:object-contain"
      />
      <img
        src={img4}
        alt="Partner 4"
        className="w-full lg:aspect-[3/2] lg:w-[120px] lg:flex-1 lg:object-contain"
      />
    </div>
  );
}

export default Partnership;
