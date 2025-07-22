import { Fragment } from "react"
import WorkCard from "../components/common/WorkCard"


const CoWorkMate = () => {
    const works = [
    {
      cardIcon: "/icon/mdi_clock-outline.svg",
      cardHeading: "Instant Booking",
      cardDisc: "No delays — book in real-time with live availability."
    },
    {
      cardIcon: "/icon/ph_check-fill.svg",
      cardHeading: "Verified Workspaces",
      cardDisc: "All locations are reviewed and vetted."
    },
    {
      cardIcon: "/icon/material-symbols_price-change.svg",
      cardHeading: "Flexible Hours",
      cardDisc: "Book for an hour, half-day, or full-day — your choice."
    },
    {
      cardIcon: "/icon/material-symbols_wifi-add.svg",
      cardHeading: "Multiple Payment Options",
      cardDisc: "Pay via UPI, card, or wallet. Fast & secure."
    },
    {
      cardIcon: "/icon/material-symbols_call-outline.svg",
      cardHeading: "24/7 Support",
      cardDisc: "Get help anytime from our support team."
    },
  ]
  return (
     <section className="container py-7.5 md:py-12.5 !pr-0 lg:!pr-17.5">
      <div className="w-full max-w-[664px] pr-5 md:pr-0">
        <h2 className="font-inter font-semibold text-[26px] md:text-[29px] lg:text-[32px] leading-normal text-black text-center md:text-left">Why Book with CoWorkMate.</h2>
        <p className="font-inter font-normal text-[14px] md:text-[17px] lg:text-[20px] leading-[150%] text-lightgray pt-3 pb-7.5 md:pt-6 md:pb-12.5 text-center md:text-left">This section helps build trust and credibility by highlighting your platform's key advantages. It reassures users why CoWorkMate is a smart and reliable choice.</p>
      </div>

      <div className="overflow-x-auto lg:overflow-x-visible flex items-center md:justify-center w-full gap-5 md:gap-8 flex-nowrap md:flex-wrap">
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

export default CoWorkMate