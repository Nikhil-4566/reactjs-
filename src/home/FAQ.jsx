import AccordionItem from '../components/common/AccordionItem';
const FAQ = () => {
  const data = [
    {
      question: "Q 1. How do I book a workspace on CoWorkMate?",
      answer: "A. Simply search by location and date, browse available spaces, and click “Book Now.” You’ll receive instant confirmation via email.",
    },
    {
      question: "Q 2. Can I cancel or reschedule my booking?",
      answer: "A. Simply search by location and date, browse available spaces, and click “Book Now.” You’ll receive instant confirmation via email.",
    },
    {
      question: "Q 3. What amenities are included in a workspace?",
      answer: "A. Simply search by location and date, browse available spaces, and click “Book Now.” You’ll receive instant confirmation via email.",
    },
    {
      question: "Q 4. Do I need a subscription to use CoWorkMate?",
      answer: "A. Simply search by location and date, browse available spaces, and click “Book Now.” You’ll receive instant confirmation via email.",
    },
    {
      question: "Q 5. Is customer support available if I have issues?",
      answer: "A. Simply search by location and date, browse available spaces, and click “Book Now.” You’ll receive instant confirmation via email.",
    },
  ];

  return (
    <section className="container  pb-7.5 pt-7.5 md:pb-15 md:pt-15">
      <div className="flex items-center justify-between w-full max-w-[940px] mx-auto">
        <img src="/icon/left.svg" className="hidden md:block" />
        <h2 className="font-inter font-semibold text-[22px] md:text-[30px] lg:text-[40px] leading-[130%] text-black text-center max-w-[558px] mx-auto">Frequently Asked Questions</h2>
        <img src="/icon/right.svg" className="hidden md:block" />
      </div>
      <p className="max-w-[487px] mx-auto font-inter font-normal text-[14px] md:text-[17px] lg:text-[20px] leading-[130%] text-lightgray pt-3 pb-7.5 md:pt-6 md:pb-15 text-center">Got a question? We’re here to help.</p>
      <div className="w-full max-w-[1010px] mx-auto">
        <div className="">
          <AccordionItem data={data} />
        </div>
      </div>

    </section>
  )
}

export default FAQ