import { Fragment } from "react"
import WorkCard from "../components/common/WorkCard"

const Works = () => {
  const works = [
    {
      cardIcon: "/icon/mdi_location.svg",
      cardHeading: "Browse & Select",
      cardDisc: "Search by city, filter by amenities, and discover the perfect space."
    },
    {
      cardIcon: "/icon/uiw_date.svg",
      cardHeading: "Choose Your Time",
      cardDisc: "Pick a date, time, and desk type. Instant confirmation on payment."
    },
    {
      cardIcon: "/icon/Frame.svg",
      cardHeading: "Check In & Focus",
      cardDisc: "Arrive, connect to Wi-Fi, grab coffee, and start being productive"
    },
  ]

  return (
    <section className="container !pr-0 lg:!pr-17.5 pb-7.5 pt-7.5 md:pb-15 md:pt-15">
      <div className="flex items-center justify-between w-full max-w-[658px] mx-auto">
        <img src="/icon/left.svg" className="hidden md:block" />
        <h2 className="font-inter font-semibold text-[22px] md:text-[30px] lg:text-[40px] leading-[130%] text-black text-center max-w-[319px] mx-auto">How It Works</h2>
        <img src="/icon/right.svg" className="hidden md:block" />
      </div>
      <p className="font-inter font-normal text-[14px] md:text-[17px] lg:text-[20px] leading-[130%] text-lightgray pt-3 pb-7.5 md:pt-6 md:pb-15 text-center">Booking a coworking space has never been easier.</p>

      <div className="overflow-x-auto lg:overflow-x-visible flex items-center justify-between w-full gap-5 md:gap-8 md:flex-nowrap">
        {
          works?.map((work, index) => {
            return (
              <Fragment key={index}>
                {/* <WorkCard cardHeading={work?.cardHeading} cardDisc={work.cardDisc} cardIcon={work.cardIcon} /> */}
                <WorkCard cardContent={work} />
              </Fragment>
            )
          })
        }
      </div>
    </section>
  )
}

export default Works