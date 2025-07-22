import { Link } from "react-router-dom"

const FeaturedCard = ({ featureContent }) => {
    return (
        <div className="min-w-[336px] rounded-3xl bg-[#F0F0F0] w-1/2 size-max">
            <img src={featureContent?.featureImage} alt={featureContent?.featureTitle} className="rounded-t-3xl w-full" />
            <div className="pt-5 md:pt-6 px-5 md:px-5 pb-7.5 ">
                <h5 className="font-inter font-medium text-[20px] lg:text-[22px] leading-[130%] text-black">{featureContent?.featureTitle}</h5>
                <div className="flex items-center justify-start gap-2 md:gap-2.5 pt-3.5 md:pt-3 pb-4.5 md:pb-5">
                    <img src={featureContent?.locationIcon} alt={featureContent?.featureTitle} className="size-5 md:size-5.5" />
                    <p className="font-inter font-normal text-[14px] lg:text-[16px] leading-[130%] text-lightgray">{featureContent?.locationText}</p>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <p className="font-inter font-normal text-[10px] lg:text-[12px] leading-[130%] text-black bg-white rounded-[6px] md:rounded-xl px-4 py-2">{featureContent?.amenitiesList1}</p>
                    <p className="font-inter font-normal text-[10px] lg:text-[12px] leading-[130%] text-black bg-white rounded-[6px] md:rounded-xl px-4 py-2">{featureContent?.amenitiesList2}</p>
                    <p className="font-inter font-normal text-[10px] lg:text-[12px] leading-[130%] text-black bg-white rounded-[6px] md:rounded-xl px-4 py-2">{featureContent?.amenitiesList3}</p>
                </div>
                <div className="flex items-center justify-between py-6 md:py-5">
                    <div className="flex items-center justify-start gap-2.5 ">
                        <img src={featureContent?.ratingIcon} alt={featureContent?.featureTitle} className="size-5" />
                        <p className="font-inter font-normal text-[14px] lg:text-[16px] leading-[130%] text-lightgray">{featureContent?.ratingText}</p>
                    </div>
                    <p className="font-inter font-normal text-[14px] lg:text-[16px] leading-[130%] text-gold ">{featureContent?.featurePrice}</p>
                </div>
                <Link to="#" className="text-white font-inter text-[14px] md:text-[22px] font-normal leading-[130%] py-3.5 rounded-xl bg-[linear-gradient(180deg,_#480CED_0%,_#6A39F2_100%)] w-full block text-center hover:bg-[linear-gradient(90deg,_#480CED_50%,_#6A39F2_100%)] hover:bg-[position:right_center] transition-all duration-500 ease-in-out">{featureContent?.featureButton}</Link>
            </div>
        </div>
    )
}

export default FeaturedCard