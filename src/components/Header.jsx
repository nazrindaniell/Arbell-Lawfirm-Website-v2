function Header({ heading, subheading, desc }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-center font-serif text-4xl lg:text-5xl">
          {heading}
        </h1>
        <h4 className="text-center font-serif text-lg font-medium lg:text-xl">
          {subheading}
        </h4>
        <p className="text-center">{desc}</p>
      </div>
    </>
  );
}
export default Header;
