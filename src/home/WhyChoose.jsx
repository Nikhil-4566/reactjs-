import { Fragment } from "react"
import WorkCard from "../components/common/WorkCard"



const WhyChoose = () => {
  const works = [
    {
      cardIcon: "/icon/mdi_clock-outline.svg",
      cardHeading: "Book in Minutes",
      cardDisc: "Choose a space and confirm your booking in just a few clicks."
    },
    {
      cardIcon: "/icon/ph_check-fill.svg",
      cardHeading: "Verified Spaces",
      cardDisc: "Only high-quality, fully verified coworking locations."
    },
    {
      cardIcon: "/icon/material-symbols_price-change.svg",
      cardHeading: "Transparent Pricing",
      cardDisc: "No hidden charges, pay only for what you use."
    },
    {
      cardIcon: "/icon/material-symbols_wifi-add.svg",
      cardHeading: "Reliable Amenities",
      cardDisc: "Fast Wi-Fi, coffee, printers, and more at every location."
    },
    {
      cardIcon: "/icon/material-symbols_call-outline.svg",
      cardHeading: "Customer Support",
      cardDisc: "24/7 live chat and email support when you need help."
    },
  ]
  return (
    <section className="container !pr-0 lg:!pr-17.5 pb-7.5 pt-7.5 md:pb-15 md:pt-15">
      <div className="flex items-center justify-between w-full max-w-[920px] mx-auto">
        <img src="/icon/left.svg" className="hidden md:block"/>
        <h2 className="font-inter font-semibold text-[22px] md:text-[30px] lg:text-[40px] leading-[130%] text-black text-center max-w-[539px] mx-auto">Why Choose CoWorkMate?</h2>
        <img src="/icon/right.svg" className="hidden md:block"/>
      </div>
      <p className="max-w-[487px] mx-auto font-inter font-normal text-[14px] md:text-[17px] lg:text-[20px] leading-[130%] text-lightgray pt-3 pb-7.5 md:pt-6 md:pb-15 text-center">Simplifying workspace booking for individuals, teams, and businesses.</p>

      <div className="overflow-x-auto lg:overflow-x-visible flex items-center md:justify-center w-full gap-5 md:gap-8 flex-nowrap md:flex-wrap">
         {
          works?.map((work, index) => {
            return (
              <Fragment key={index}>
                <WorkCard mainBorder={"border-[0px]"} cardContent={work} />
              </Fragment>
            )
          })
        }
      </div>

    </section>
  )
}

export default WhyChoose