import { Link } from "react-router-dom"

const Book = () => {
  return (
     <section className="container  pb-7.5 pt-7.5 md:pb-15 md:pt-15">
      <div className="flex items-baseline justify-between w-full max-w-[940px] mx-auto">
        <img src="/icon/left.svg" className="hidden md:block" />
        <h2 className="font-inter font-semibold text-[22px] md:text-[30px] lg:text-[40px] leading-[130%] text-black text-center max-w-[558px] mx-auto">Ready to Book Your Perfect Workspace?</h2>
        <img src="/icon/right.svg" className="hidden md:block" />
      </div>
      <p className="max-w-[487px] mx-auto font-inter font-normal text-[14px] md:text-[17px] lg:text-[20px] leading-[130%] text-lightgray pt-3.5 pb-7.5 md:pt-5.5 md:pb-7.5 text-center">Join thousands of professionals using CoWorkMate to work better, smarter, and anywhere.</p>
      <div className="w-full max-w-[1010px] mx-auto">
        <div className="">
          <div className="text-center">
            <Link to="/" className="bg-[linear-gradient(180deg,_#480CED_0%,_#6A39F2_100%)] hover:bg-[linear-gradient(90deg,_#480CED_50%,_#6A39F2_100%)] hover:bg-[position:right_center] transition-all duration-500 ease-in-out block w-full max-w-[170px] md:max-w-[328px] mx-auto rounded-xl font-inter font-normal text-[14px] md:text-[20px] leading-[130%] text-white px-6 py-3 md:px-10 md:py-5">Find a Workspace</Link>
          </div>
          <div className="flex items-baseline justify-center gap-1 w-full max-w-[211px] mx-auto mt-5 md:mt-7">
            <p className="font-inter font-medium text-[16px] lg:text-[20px] leading-[130%] text-lightgray">or</p>
            <Link to="/" className="font-inter font-medium text-[16px] lg:text-[20px] leading-[130%] text-mediumpurple">Learn How It Works</Link>
          </div>
        </div>
      </div>

    </section> 
  )
}

export default Book