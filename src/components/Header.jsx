function Header({ heading, subheading, desc }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 lg:gap-8">
        <h1 className="text-center font-serif text-4xl lg:text-5xl">
          {heading}
        </h1>
        <h3 className="text-center font-serif text-xl font-medium lg:text-2xl">
          {subheading}
        </h3>
        <p className="text-center text-base text-black-200 lg:text-lg">
          {desc}
        </p>
      </div>
    </>
  );
}
export default Header;
