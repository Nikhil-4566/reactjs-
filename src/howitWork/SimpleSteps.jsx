import { Fragment } from "react"
import WorkCard from "../components/common/WorkCard"


const SimpleSteps = () => {
    const works = [
    {
      cardIcon: "/icon/material-symbols_search-rounded.svg",
      cardHeading: "Browse & Select",
      cardDisc: "Search by city, filters, and amenities to find your ideal workspace."
    },
    {
      cardIcon: "/icon/mingcute_time-line.svg",
      cardHeading: "Choose Time & Details",
      cardDisc: "Pick the date, time, and duration. Check availability and confirm instantly."
    },
    {
      cardIcon: "/icon/material-symbols_wifi-rounded.svg",
      cardHeading: "Check In & Work",
      cardDisc: "Arrive, grab your coffee, connect to Wi-Fi, and get productive!"
    },
  ]
  return (
    <section className="container py-7.5 md:py-12.5 !pr-0 lg:!pr-17.5">
      <div className="w-full max-w-[531px] pr-5 md:pr-0">
        <h2 className="font-inter font-semibold text-[26px] md:text-[29px] lg:text-[32px] leading-normal text-black text-center md:text-left">How to Book Your Workspace in 4 Simple Steps</h2>
        <p className="font-inter font-normal text-[14px] md:text-[17px] lg:text-[20px] leading-[150%] text-lightgray pt-6 pb-12.5 md:pt-6 md:pb-12.5 text-center md:text-left">Whether you're a freelancer, remote worker, or team — booking a workspace with CoWorkMate is fast, easy, and flexible.</p>
      </div>

      <div className="overflow-x-auto lg:overflow-x-visible flex items-center justify-between w-full gap-5 md:gap-8 md:flex-nowrap"> 
        {
          works?.map((work, index) => {
            return (
              <Fragment key={index}>
                <WorkCard mainBorder={"border-[0px]"} icon={"size-[40px] md:size-[50px]"} titlestyle={"text-[18px] md:text-[20px] lg:text-[22px] leading-[150%] pt-5 pb-3 md:pt-6 md:pb-3"} subtitlestyle={"font-normal text-[12px] md:text-[16px]  leading-[150%]"} cardContent={work} /> 
              </Fragment> 
            )
          })
        }
      </div>
    </section>
  )
}

export default SimpleSteps