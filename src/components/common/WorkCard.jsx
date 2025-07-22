
// const WorkCard = ({ cardHeading, cardDisc, cardIcon }) => {
const WorkCard = ({ cardContent, icon, titlestyle, subtitlestyle , mainBorder}) => {
    return (
        <div className={` ${mainBorder ?? "border border-[#0000001A]"} min-w-[300px] max-w-[340px] lg:max-w-[415px] w-full rounded-3xl bg-[#F0F0F0]  p-5 md:p-7.5 `}>
            <img src={cardContent?.cardIcon} alt={cardContent?.cardHeading} className={` ${icon ?? "size-7.5 md:size-10"} rounded`} />
            <h5 className={` ${titlestyle ?? "text-[16px] md:text-[20px] lg:text-[24px] leading-[130%] pt-6.5 pb-5 md:pt-7.5 md:pb-4" } font-inter font-medium text-black`}>{cardContent?.cardHeading}</h5>
            <p className={` ${subtitlestyle ?? "font-medium text-[14px] md:text-[16px] lg:text-[18px] leading-[130%]" } font-inter text-lightgray`}>{cardContent?.cardDisc}</p>
        </div>
    )
}

export default WorkCard     