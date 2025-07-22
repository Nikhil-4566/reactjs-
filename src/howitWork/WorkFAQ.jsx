import AccordionItem from '../components/common/AccordionItem';


const WorkFAQ = () => {
  const data = [
    {
      question: "Q 1. How do I book a workspace?",
      answer: "A. Simply search for your location, select your preferred workspace, choose a time slot, and complete payment.",
    },
    {
      question: "Q 2. Can I cancel or reschedule my booking?",
      answer: "A. Simply search for your location, select your preferred workspace, choose a time slot, and complete payment.",
    },
    {
      question: "Q 3. What amenities are included in a workspace?",
      answer: "A. Simply search for your location, select your preferred workspace, choose a time slot, and complete payment.",
    },
    {
      question: "Q 4. Do I need a subscription to use CoWorkMate?",
      answer: "A. Simply search for your location, select your preferred workspace, choose a time slot, and complete payment.",
    },
    {
      question: "Q 5. Is customer support available if I have issues?",
      answer: "A. Simply search for your location, select your preferred workspace, choose a time slot, and complete payment.",
    },
  ];
  return (

    <section className="container  pb-7.5 pt-7.5 md:pb-15 md:pt-15">
      <h2 className="font-inter font-semibold text-[22px] md:text-[30px] lg:text-[40px] leading-[130%] text-black text-center max-w-[558px] mx-auto">Frequently Asked Questions</h2>
      <p className="max-w-[565px] mx-auto font-inter font-normal text-[14px] md:text-[17px] lg:text-[20px] leading-[130%] text-lightgray pt-3 pb-7.5 md:pt-6 md:pb-5 text-center">Find answers to common questions about workspace bookings, payments, and more.</p>
      <div className="w-full max-w-[1010px] mx-auto">
        <div className="">
          <AccordionItem data={data} />
        </div>
      </div>

    </section>
  )
}

export default WorkFAQ