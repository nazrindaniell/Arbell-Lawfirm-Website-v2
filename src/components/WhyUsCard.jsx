function WhyUsCard({ number, title, description, imgSrc, linkSrc, reverse }) {
  return (
    <div
      className={`flex ${reverse ? "flex-col lg:flex-col-reverse" : "flex-col"}`}
    >
      <div className="h-full w-full">
        <img
          src={imgSrc}
          alt={title}
          className="h-40 w-full object-cover object-center md:h-full"
        />
      </div>
      <div className="flex flex-col gap-3 p-4">
        <h1 className="font-serif text-3xl text-orange lg:text-4xl">
          {number}
        </h1>
        <h2 className="font-serif text-2xl lg:text-3xl">{title}</h2>
        <p>{description}</p>
        <a href={linkSrc} className="learn-more-btn w-fit">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default WhyUsCard;
