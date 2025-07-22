
const UserCard = ({ userContent }) => {
    return (
        <div className="p-5 md:p-7.5 min-w-[320px] max-w-[340px] lg:max-w-[415px] rounded-3xl bg-[#F0F0F0] w-1/2 size-max">
                <div className="flex items-center justify-start gap-3">
                    <img src={userContent?.userImage} alt={userContent?.userTitle} className="size-12.5" />
                    <div>
                        <h5 className="font-inter font-medium text-4 leading-[130%] text-black pb-0.5">{userContent?.userTitle}</h5>
                        <p className="font-inter text-[12px] leading-[130%] text-lightgray">{userContent?.userSubTitle}</p>
                    </div>
                </div>
                <p className="py-5 md:py-6 font-inter font-normal text-[14px] lg:text-[18px] leading-[130%] text-lightgray">{userContent?.userInfo}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start gap-3 ">
                        <img src={userContent?.ratingIcon} alt={userContent?.featureTitle} className="size-4.5 md:size-5" />
                        <p className="font-inter font-normal text-[14px] lg:text-[16px] leading-[130%] text-lightgray">{userContent?.ratingNumber}</p>
                    </div>
                    <p className="font-inter font-normal text-[14px] lg:text-[16px] leading-[130%] text-lightgray ">{userContent?.date}</p>
                </div>
            
        </div>
    )
}

export default UserCard