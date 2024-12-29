import HeaderImg from "../assets/hero-header.webp";
import PertaminaLogo from "../assets/pertamina-logo.webp";
import ShopeeLogo from "../assets/shopee-logo.webp";
import AppleLogo from "../assets/apple-logo.webp";
import SamsungLogo from "../assets/samsung-logo.webp";

function Partnership() {
  return (
    <div className="border-black container mx-auto py-8 lg:flex">
      <div className="flex w-full flex-col gap-8 md:gap-8">
        <h2 className="text-center font-serif text-3xl font-bold lg:text-4xl">
          Who trusted us
        </h2>
        <div className="grid grid-cols-2 place-items-center gap-8 md:grid-cols-4">
          <img
            src={PertaminaLogo}
            alt="Partner 1"
            className="md:w-54 aspect-[3/2] w-52 object-contain"
          />
          <img
            src={ShopeeLogo}
            alt="Partner 2"
            className="md:w-54 aspect-[3/2] w-52 object-contain"
          />
          <img
            src={AppleLogo}
            alt="Partner 3"
            className="md:w-54 aspect-[3/2] w-52 object-contain"
          />
          <img
            src={SamsungLogo}
            alt="Partner 4"
            className="md:w-54 aspect-[3/2] w-52 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Partnership;
