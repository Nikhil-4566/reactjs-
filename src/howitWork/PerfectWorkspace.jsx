import { Link } from "react-router-dom"
const PerfectWorkspace = () => {
  return (
     <section className="container  py-7.5 md:py-12.5">
      <div className="flex items-baseline justify-between w-full max-w-[553px] mx-auto">
        <h2 className="font-inter font-semibold text-[26px] md:text-[33px] lg:text-[40px] leading-[130%] text-black text-center max-w-[558px] mx-auto">Ready to Book Your Perfect Workspace?</h2>
      </div>
      <p className="max-w-[669px] mx-auto font-inter font-normal text-[14px] md:text-[17px] lg:text-[20px] leading-[130%] text-lightgray pt-3 pb-12.5 md:pt-5.5 md:pb-10 text-center">Explore flexible coworking options near you and book instantly.</p>
      <div className="w-full max-w-[1010px] mx-auto">
        <div className="">
          <div className="text-center">
            <Link to="/" className="bg-[linear-gradient(180deg,_#480CED_0%,_#6A39F2_100%)] hover:bg-[linear-gradient(90deg,_#480CED_50%,_#6A39F2_100%)] hover:bg-[position:right_center] transition-all duration-500 ease-in-out block w-full max-w-[254px] md:max-w-[350px] mx-auto rounded-xl font-inter font-normal text-[14px] md:text-[24px] leading-[130%] text-white px-6 py-4.5 md:px-10 md:py-4.5">Browse Workspaces</Link>
          </div>
          <div className="flex items-baseline justify-center gap-1 w-full max-w-[211px] mx-auto mt-3 md:mt-7">
            <p className="font-inter font-medium text-[16px] lg:text-[20px] leading-[130%] text-lightgray">or</p>
            <Link to="/" className="font-inter font-medium text-[12px] lg:text-[20px] leading-[130%] text-mediumpurple">Learn How It Works</Link>
          </div>
        </div>
      </div>

    </section> 
  )
}

export default PerfectWorkspace