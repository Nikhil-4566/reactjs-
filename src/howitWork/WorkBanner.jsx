import { Link } from "react-router-dom";

const WorkBanner = () => {
  return (
     <section className="container py-5 md:py-10">
      <div className="flex-col-reverse md:flex-row flex items-center justify-between gap-6 md:gap-4">
        <div className="w-full max-w-full md:max-w-[531px]">
          <h1 className="font-inter font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-normal text-black ">How CoWorkMate Works.</h1>
          <p className="font-inter font-normal text-[14px] md:text-[17px] lg:text-[20px] leading-[150%] text-lightgray pt-3 pb-10 md:pt-4.5 md:pb-15">A simple step-by-step process to book the perfect workspace for your day.</p>
          <Link to="/" className="bg-[linear-gradient(180deg,_#480CED_0%,_#6A39F2_100%)] rounded-xl font-inter font-medium text-[14px] lg:text-[24px] leading-[100%] md:leading-normal text-white px-4.5 py-3 md:px-5 md:py-3.5 lg:px-8 lg:py-4.5 inline-block hover:bg-[linear-gradient(90deg,_#480CED_50%,_#6A39F2_100%)] hover:bg-[position:right_center] transition-all duration-500 ease-in-out">Browse Workspace</Link>
        </div>
        <div className="">
          <img src="/images/image-removebg-preview.png" alt="icon" className="w-full max-w-[754px]"/>
        </div>
      </div>
    </section>
  )
}

export default WorkBanner