const Banner = () => {
  return (
    <>
      <section className="">
        <div className="flex items-center justify-between">
          <div className="pt-[59px] w-full max-w-[718px]">
            <h1 className="font-inter font-medium text-[64px] leading-[120%] text-black w-full max-w-[659px]">Find Your Perfect Workspace, Anytime.</h1>
            <p className="font-inter font-normal text-[24px] leading-[130%] text-lightgray w-full max-w-[539px] pt-[24px] pb-[40px]">Discover and book coworking spaces that match your style and needs.</p>
          </div>
          <div className="w-full">
              <img src="/images/full-shot-students-studying-indoors.jpg" alt="error" />
          </div>
        </div>

      </section>
    </>
  )
}

export default Banner
