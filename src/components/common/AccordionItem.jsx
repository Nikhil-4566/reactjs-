import { useState, useRef, useEffect } from "react";

const AccordionItem = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-2">
      {data.map((item, index) => {
        const isOpen = openIndex === index;
        const contentRef = useRef(null);
        const [height, setHeight] = useState("0px");

        useEffect(() => {
          if (isOpen) {
            setHeight(`${contentRef.current.scrollHeight}px`);
          } else {
            setHeight("0px");
          }
        }, [isOpen]);

        return (
          <div key={index} className="border-b border-[#0000001F] mb-0">
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left pt-3.5 pb-2.5 md:pt-7.5 md:pb-5 font-medium flex justify-between items-center font-inter text-[12px] md:text-[20px] leading-[130%] text-black"
            >
              <span>{item.question}</span>
              <span>
                {isOpen ? (
                  <img
                    src="/icon/iconamoon_arrow-up-2-bold.svg"
                    alt="Collapse"
                    className="size-4 md:size-6"
                  />
                ) : (
                  <img
                    src="/icon/iconamoon_arrow-down-2.svg"
                    alt="Expand"
                    className="size-4 md:size-6"
                  />
                )}
              </span>
            </button>

            <div
              ref={contentRef}
              style={{
                maxHeight: height,
              }}
              className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
            >
              <div className="pb-4 font-inter text-[10px] md:text-[16px] leading-[130%] text-lightgray font-normal">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccordionItem;
