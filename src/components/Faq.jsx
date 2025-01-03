import { useState } from "react";
import faqData from "../data/faqData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 place-items-start gap-6 lg:grid-cols-2">
      <div>
        <p className="font-semibold">FAQ</p>
        <h1 className="w-full font-serif text-4xl lg:w-[40%] lg:text-5xl">
          Frequently asked
          <span className="font-serif text-orange"> questions.</span>
        </h1>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h4 className="font-serif text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur
          </h4>
          <p className="text-base text-black-200 lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 border-b border-white-300 py-2"
            >
              <div className="flex items-center justify-between gap-3">
                <p
                  className="w-full cursor-pointer text-base font-medium lg:text-lg"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.heading}
                </p>
                <FontAwesomeIcon
                  icon={activeIndex === index ? faMinus : faPlus}
                  onClick={() => toggleFaq(index)}
                  className="cursor-pointer"
                />
              </div>
              {activeIndex === index && (
                <p className="text-base text-black-200 lg:text-lg">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
