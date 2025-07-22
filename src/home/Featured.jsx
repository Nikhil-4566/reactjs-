import { Fragment } from "react"
import FeaturedCard from "../components/common/FeaturedCard"

const Featured = () => {

  const featured=[
    {
        featureImage: "/images/computer-laptop-stylish-office 1.png",
        featureTitle: "UrbanHive Workspace",
        locationIcon: "/icon/new_mdi_location.svg",
        locationText: "Bangalore, India",
        amenitiesList1: "Fast WiFi",
        amenitiesList2: "Private Office",
        amenitiesList3: "24/7 Access",
        ratingIcon: "/icon/material-symbols_star-rounded.svg",
        ratingText: "4.9 (210 reviews)",
        featurePrice: "₹ 400/hr",
        featureButton: " View Details"
    },
    {
        featureImage: "/images/plant.png",
        featureTitle: "NovaDesk Studios",
        locationIcon: "/icon/new_mdi_location.svg",
        locationText: "Mumbai, India",
        amenitiesList1: "Day Pass",
        amenitiesList2: " Meeting Room",
        amenitiesList3: "Coffee Included",
        ratingIcon: "/icon/material-symbols_star-rounded.svg",
        ratingText: "4.7 (132 Reviews)",
        featurePrice: " ₹199/hr",
        featureButton: " View Details"
    },
    {
        featureImage: "/images/car.png",
        featureTitle: "WorkNest Collective",
        locationIcon: "/icon/new_mdi_location.svg",
        locationText: "Delhi, India",
        amenitiesList1: "Pet Friendly",
        amenitiesList2: "Shared Desk",
        amenitiesList3: " Air Conditioning",
        ratingIcon: "/icon/material-symbols_star-rounded.svg",
        ratingText: "4.8 (158 Reviews)",
        featurePrice: "₹180/hr",
        featureButton: " View Details"
    },
  ]

  return (
    <section className="container  pb-7.5 pt-7.5 md:pb-15 md:pt-15">
      <div className="flex items-center justify-between w-full max-w-[896px] mx-auto">
        <img src="/icon/left.svg" className="hidden md:block"/>
        <h2 className="font-inter font-semibold text-[22px] md:text-[30px] lg:text-[40px] leading-[130%] text-black text-center max-w-[515px] mx-auto">Top Featured Workspaces</h2>
        <img src="/icon/right.svg" className="hidden md:block"/>
      </div>
      <p className="font-inter font-normal text-[14px] md:text-[17px] lg:text-[20px] leading-[130%] text-lightgray pt-3 pb-7.5 md:pt-6 md:pb-15 text-center max-w-[507px] mx-auto">Handpicked workspaces loved by remote professionals and teams.</p>

      <div className="overflow-x-auto xl:overflow-x-visible flex items-center justify-between w-full gap-4 md:gap-8  xl:flex-nowrap">
        {
          featured?.map((feature, index) => {
            return (
              <Fragment key={index}>
                <FeaturedCard featureContent={feature} />
              </Fragment>
            )
          })
        }
       
      </div>
    </section>
  )
}

export default Featured