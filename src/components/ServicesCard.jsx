function ServicesCard({ imgSrc, heading, desc }) {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="relative h-60 w-full">
          <img
            src={imgSrc}
            alt="Service Card Img"
            className="h-full w-full object-cover object-center"
          />
          <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-white px-5 py-2 font-serif text-2xl lg:text-3xl">
            {heading}
          </h2>
        </div>
        <div>
          <p className="text-black-200">{desc}</p>
        </div>
      </div>
    </>
  );
}

export default ServicesCard;
