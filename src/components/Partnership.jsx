import HeaderImg from "../assets/hero-header.webp";
import PertaminaLogo from "../assets/pertamina-logo.webp";
import ShopeeLogo from "../assets/shopee-logo.webp";
import AppleLogo from "../assets/apple-logo.webp";
import SamsungLogo from "../assets/samsung-logo.webp";

function Partnership() {
  return (
    <div className="container mx-auto border-black py-8 lg:flex">
      <div className="flex w-full flex-col gap-12 lg:gap-10">
        <h2 className="text-center font-serif text-3xl font-bold lg:text-4xl">
          Who trusted us
        </h2>
        <div className="lg:gap-x-18 grid grid-cols-2 place-items-center gap-x-12 gap-y-8 lg:grid-cols-4">
          <img
            src={PertaminaLogo}
            alt="Partner 1"
            className="aspect-[5/2] w-52 object-contain lg:w-60"
          />
          <img
            src={ShopeeLogo}
            alt="Partner 2"
            className="aspect-[5/2] w-52 object-contain lg:w-60"
          />
          <img
            src={AppleLogo}
            alt="Partner 3"
            className="aspect-[5/2] w-52 object-contain lg:w-60"
          />
          <img
            src={SamsungLogo}
            alt="Partner 4"
            className="aspect-[5/2] w-52 object-contain lg:w-60"
          />
        </div>
      </div>
    </div>
  );
}

export default Partnership;
