import { Link } from "react-router-dom";

const Banner = () => {

  return (
    <>
      <section className="pb-[30px] md:pb-[68px]">
        <div className="flex-col-reverse lg:flex-row flex items-start gap-0 md:gap-3 justify-end pl-[20px] lg:pl-[60px] pr-[20px] md:pr-[0px]">
          <div className="pt-[24px] lg:pt-[59px] w-[100%] lg:w-[50%] max-w-full lg:max-w-[714px]">
            <h1 className="font-inter font-medium text-[32px] md:text-[48px] lg:text-[64px] leading-[120%] text-black w-full max-w-[659px]">Find Your Perfect Workspace, Anytime.</h1>
            <p className="font-inter font-normal text-[14px] md:text-[19px] lg:text-[24px] leading-[130%] text-lightgray w-full max-w-[539px] pt-[12px] pb-[30px] md:pt-[24px] md:pb-[40px]">Discover and book coworking spaces that match your style and needs.</p>
            <div className="max-w-[563px] w-full border-x border-[#fff] rounded-t-3xl">
              <form action="" className="position relative rounded-t-3xl border-t border-[#5714F4] p-5 md:px-6 md:py-7.5 mb-0 md:mb-10  after:bg-[linear-gradient(180deg,_#480CED_0%,_#ffffff_100%)] after:px-[0.5px] after:position after:absolute after:top-4.5 after:left-0 after:h-[60%] after:rounded-t-3xl after:content-[''] before:bg-[linear-gradient(180deg,_#480CED_0%,_#ffffff_100%)] before:px-[0.5px] before:position before:absolute before:top-4.5 before:right-0 before:h-[60%] before:rounded-t-3xl before:content-['']">
                <div className="flex items-center justify-between gap-5 md:gap-2.5">
                  <div className="position relative inline-block max-w-[228px] w-full bg-[#F0F0F0] rounded-[6px] md:rounded-[10px]">
                    <img src="/icon/mdi_location (2).svg" alt="icon" className="position absolute top-2/4 left-3.5 md:left-6 transform -translate-y-2/4 size-4 md:size-6"/>
                    <input type="text" placeholder="Enter city or area" id="city" className="focus-visible:outline-0 max-w-[228px] w-full py-3 pl-10 pr-3.5 md:pl-14.5 md:pr-4 font-inter font-normal text-[10px] md:text-[18px] leading-[130%] text-lightgray"/>
                  </div>
                  <div className="position relative inline-block max-w-[255px] w-full bg-[#F0F0F0] rounded-[6px] md:rounded-[10px]">
                    {/* <img src="/icon/uiw_date (1).svg" alt="icon" className="position absolute top-2/4 left-3.5 md:left-6 transform -translate-y-2/4 size-4 md:size-6"/> */}
                    <input type="date" placeholder="Select date" id="date" className="focus-visible:outline-0 max-w-[255px] w-full py-3 pl-10 pr-3.5 lg:pl-14.5 md:pr-4 font-inter font-normal text-[10px] md:text-[18px] leading-[130%] text-lightgray"/>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-5 md:gap-2.5 mt-5 md:mt-7">
                  <div className="position relative inline-block max-w-[343px]  w-full bg-[#F0F0F0] rounded-[6px] md:rounded-[10px] ">
                    <img src="/icon/lucide_user-round.svg" alt="icon" className="position absolute top-2/4 left-3.5 md:left-6 transform -translate-y-2/4 size-4 md:size-6"/>
                    <select className="appearance-none focus-visible:outline-0 max-w-[155px] md:max-w-[343px] w-full py-3 pl-10 pr-3.5 md:pl-14.5 md:pr-4 font-inter font-normal text-[10px] md:text-[18px] leading-[130%] text-lightgray" id="person">
                      <option value="1">1 person</option>
                      <option value="2">2 person</option>
                      <option value="3">3 person</option>
                      <option value="4">4 person</option>
                      <option value="5">5 person</option>
                      <option value="6">6 person</option>
                      <option value="7">7 person</option>
                      <option value="8">8 person</option>
                      <option value="9">9 person</option>
                      <option value="10">10 person</option>
                    </select>
                  </div>
                  <button type="submit" className="bg-[linear-gradient(180deg,_#480CED_0%,_#6A39F2_100%)] rounded-[6px] md:rounded-xl font-inter font-normal text-[12px] md:text-[18px] leading-[130%] text-white px-10 py-3  inline-block hover:bg-[linear-gradient(90deg,_#480CED_50%,_#6A39F2_100%)] hover:bg-[position:right_center] transition-all duration-500 ease-in-out">Search</button>
                </div>
              </form>
            </div>
            <Link to="/" className="bg-[linear-gradient(180deg,_#480CED_0%,_#6A39F2_100%)] rounded-xl font-inter font-normal text-[16px] lg:text-[20px] leading-[130%] text-white px-7 py-4 lg:px-10 lg:py-5 mr-6 lg:mr-8 hidden md:inline-block hover:bg-[linear-gradient(90deg,_#480CED_50%,_#6A39F2_100%)] hover:bg-[position:right_center] transition-all duration-500 ease-in-out">Explore Workspaces</Link>
            <Link to="/" className="bg-[linear-gradient(180deg,_#480CED_0%,_#6A39F2_100%)] rounded-xl font-inter font-normal text-[16px] lg:text-[20px] leading-[130%] text-white px-7 py-4 lg:px-10 lg:py-5 hidden md:inline-block hover:bg-[linear-gradient(90deg,_#480CED_50%,_#6A39F2_100%)] hover:bg-[position:right_center] transition-all duration-500 ease-in-out">Log In</Link>
          </div>
          <div className="w-[100%] lg:w-[50%]">
              <img src="/images/full-shot-students-studying-indoors.jpg" alt="error" className="rounded-xl md:rounded-e-none" />
          </div>
         
        </div>

      </section>
    </>
  )
}

export default Banner
