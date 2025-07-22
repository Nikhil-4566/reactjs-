import { Fragment } from "react"
import UserCard from "../components/common/UserCard"

const OurUsers = () => {

  const users = [
    {
      userImage: "/images/Sakshi-Mehra.png",
      userTitle: "Sakshi Mehra",
      userSubTitle: "Freelance Designer – Delhi",
      userInfo: "CoWorkMate made it easy to find quiet workspaces while traveling. The booking process is so smooth!”",
      ratingIcon: "/icon/material-symbols_star-rounded (1).svg",
      ratingNumber: "4.8",
      date: "15May,2024",
    },
    {
      userImage: "/images/Aarav-Bansal.png",
      userTitle: "Aarav Bansal",
      userSubTitle: "Startup Founder – Bangalore",
      userInfo: "I loved how fast I could find a place for my team meetings. No more messy rentals!",
      ratingIcon: "/icon/material-symbols_star-rounded (1).svg",
      ratingNumber: "4.7",
      date: "20Aprail,2025",
    },
    {
      userImage: "/images/Sakshi-Mehra.png",
      userTitle: "Neha-Kapoor",
      userSubTitle: " Remote Project Manager – Pune",
      userInfo: "Reliable Wi-Fi, coffee, and a productive environment. I use CoWorkMate 3 times a week!”",
      ratingIcon: "/icon/material-symbols_star-rounded (1).svg",
      ratingNumber: "4.9",
      date: "15Feb,2024",
    },
  ]

  return (
    <section className="container !pr-0 lg:!pr-17.5 pb-7.5 pt-7.5 md:pb-15 md:pt-15">
      <div className="flex items-center justify-between w-full max-w-[920px] mx-auto">
        <img src="/icon/left.svg" className="hidden md:block" />
        <h2 className="font-inter font-semibold text-[22px] md:text-[30px] lg:text-[40px] leading-[130%] text-black text-center max-w-[539px] mx-auto">What Our Users Are Saying</h2>
        <img src="/icon/right.svg" className="hidden md:block"/>
      </div>
      <p className="max-w-[487px] mx-auto font-inter font-normal text-[14px] md:text-[17px] lg:text-[20px] leading-[130%] text-lightgray pt-3 pb-7.5 md:pt-6 md:pb-15 text-center">Trusted by remote professionals, startups, and global teams.</p>
      <div className="overflow-x-auto lg:overflow-x-visible flex items-center justify-between lg:justify-center w-full gap-5 md:gap-8 flex-nowrap lg:flex-wrap">
        {
          users?.map((user, index) => {
            return (
              <Fragment key={index}>
                <UserCard userContent={user} />
              </Fragment>
            )
          })
        }
      </div>

    </section>
  )
}

export default OurUsers