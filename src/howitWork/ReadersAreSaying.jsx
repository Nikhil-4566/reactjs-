import { Fragment } from "react"
import UserCard from "../components/common/UserCard"

const ReadersAreSaying = () => {
  const users = [
    {
      userImage: "/images/Sakshi-Mehra.png",
      userTitle: "Ritika Sharma",
      userSubTitle: "Freelance Writer",
      userInfo: "CoWorkMate made finding peaceful and affordable workspaces so easy. I love the flexibility",
      ratingIcon: "/icon/material-symbols_star-rounded (1).svg",
      ratingNumber: "4.8",
      date: "15May,2024",
    },
    {
      userImage: "/images/Aarav-Bansal.png",
      userTitle: "Kunal Mehta",
      userSubTitle: "Startup Founder, ZapTech",
      userInfo: "We used CoWorkMate to book team workrooms during our product sprint — super smooth experience!",
      ratingIcon: "/icon/material-symbols_star-rounded (1).svg",
      ratingNumber: "4.7",
      date: "20Aprail,2025",
    },
    {
      userImage: "/images/Ayesha.png",
      userTitle: "Ayesha Qureshi",
      userSubTitle: "Remote Designer",
      userInfo: "Clean spaces, fast Wi-Fi, and coffee? Yes, please. The support team is also amazing!",
      ratingIcon: "/icon/material-symbols_star-rounded (1).svg",
      ratingNumber: "4.7",
      date: "20Aprail,2025",
    },
  ]
  
  return (
    <section className="container py-5 md:py-12.5 !pr-0 lg:!pr-17.5">
      <div className="w-full max-w-[664px] ">
        <h2 className="font-inter font-semibold text-[26px] md:text-[29px] lg:text-[32px] leading-normal text-black ">What Our Readers Are Saying</h2>
        <p className="font-inter font-normal text-[14px] md:text-[17px] lg:text-[20px] leading-[150%] text-lightgray pt-3 pb-7.5 md:pt-6 md:pb-12.5 ">Hear from our growing community of founders, freelancers, and remote teams.</p>
      </div>

      <div className="overflow-x-auto lg:overflow-x-visible flex items-center md:justify-center w-full gap-5 md:gap-8 flex-nowrap md:flex-wrap">
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

export default ReadersAreSaying