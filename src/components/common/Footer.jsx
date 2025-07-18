import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between pt-[40px] pb-[30px] md:pt-[60px] md:pb-[167px] gap-[20px] md:gap-[15px]">
          <div className="w-full max-w-[585px]">
            <div className="w-full max-w-[173px] md:max-w-[205px]">
              <Link to="/">
                <img src="/images/logo.png" alt="error" />
              </Link>
            </div>
            <p className="w-full max-w-[485px] py-[12px] md:pt-[24px] md:pb-[14px] text-lightgray font-inter text-[14px] md:text-[20px]  font-normal leading-[130%]">CoWorkMate helps you find and book the perfect coworking space anywhere, anytime.</p>
            <div className="inline-flex justify-between flex-col">
              <div className="flex items-center gap-[7px] text-lightgray font-inter text-[14px] md:text-[20px] font-normal leading-[130%]">
                <p>Email:</p><Link to="mailto:support@coworkmate.com" className="inline text-mediumpurple font-inter text-[14px] md:text-[20px] font-normal leading-[130%]">support@coworkmate.com</Link>
              </div>
              <div className="flex items-center gap-[7px] text-lightgray font-inter text-[14px] md:text-[20px] font-normal leading-[130%]">
                <p>Phone:</p><Link to="tel:+91 98765 43210" className="inline text-lightgray font-inter text-[14px] md:text-[20px] font-normal leading-[130%] py-[12px] md:py-[14px]">+91 98765 43210</Link>
              </div>
              <p className="inline text-lightgray font-inter text-[14px] md:text-[20px] font-normal leading-[130%]">Address : Mumbai, India</p>
            </div>
          </div>
          <div className="w-full max-w-[153px]">
            <div>
              <h4 className="font-inter text-[14px] md:text-[18px] font-semibold text-black leading-[130%] mb-[24px] md:mb-[20px]">Quick Links</h4>
              <ul className="">
                <li>
                  <Link to="/" className="inline-block font-inter text-[14px] md:text-[16px]   font-normal text-lightgray leading-[130%] mb-[14px]">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="inline-block font-inter text-[14px] md:text-[16px]   font-normal text-lightgray leading-[130%] mb-[14px]">About</Link>
                </li>
                <li>
                  <Link to="/howitwork" className="inline-block font-inter text-[14px] md:text-[16px]  font-normal text-lightgray leading-[130%] mb-[14px]">How It Works</Link>
                </li>
                <li>
                  <Link to="/blog" className="inline-block font-inter text-[14px] md:text-[16px]  font-normal text-lightgray leading-[130%] mb-[14px]">Blog</Link>
                </li>
                <li>
                  <Link to="/Contact" className="inline-block font-inter text-[14px] md:text-[16px]  font-normal text-lightgray leading-[130%]">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full max-w-[118px]">
            <div>
              <h4 className="font-inter text-[14px] md:text-[18px] font-semibold text-black leading-[130%] mb-[24px] md:mb-[20px]">Explore</h4>
              <ul className="">
                <li>
                  <Link to="#" className="inline-block font-inter text-[14px] md:text-[16px]  font-normal text-lightgray leading-[130%] mb-[14px]">For Freelancers</Link>
                </li>
                <li>
                  <Link to="#" className="inline-block font-inter text-[14px] md:text-[16px]  font-normal text-lightgray leading-[130%] mb-[14px]">For Teams</Link>
                </li>
                <li>
                  <Link to="#" className="inline-block font-inter text-[14px] md:text-[16px]  font-normal text-lightgray leading-[130%] mb-[14px]">Private Cabins</Link>
                </li>
                <li>
                  <Link to="#" className="inline-block font-inter text-[14px] md:text-[16px]  font-normal text-lightgray leading-[130%] mb-[14px]">Daily Passes</Link>
                </li>
                <li>
                  <Link to="#" className="inline-block font-inter text-[14px] md:text-[16px]  font-normal text-lightgray leading-[130%]">Book by City</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full max-w-[147px]">
            <div>
              <h4 className="font-inter text-[14px] md:text-[18px] font-semibold text-black leading-[130%] mb-[24px] md:mb-[20px]">Support</h4>
              <ul className="">
                <li>
                  <Link to="#" className="inline-block font-inter text-[14px] md:text-[16px]  font-normal text-lightgray leading-[130%] mb-[14px]">FAQ</Link>
                </li>
                <li>
                  <Link to="#" className="inline-block font-inter text-[14px] md:text-[16px]  font-normal text-lightgray leading-[130%] mb-[14px]">Help Center</Link>
                </li>
                <li>
                  <Link to="#" className="inline-block font-inter text-[14px] md:text-[16px]  font-normal text-lightgray leading-[130%] mb-[14px]">Cancellation Policy</Link>
                </li>
                <li>
                  <Link to="#" className="inline-block font-inter text-[14px] md:text-[16px]  font-normal text-lightgray leading-[130%] mb-[14px]">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#" className="inline-block font-inter text-[14px] md:text-[16px]  font-normal text-lightgray leading-[130%]">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="md:border-t border-[#55555533]">
        <div className="!p-[0px] md:!py-[23px] md:!px-[20px] lg:!px-[60px] container flex flex-col-reverse md:flex-row items-center justify-between">
          <p className="py-[26px] md:py-[0] border-t md:border-0 border-[#55555533] w-full max-w-full md:max-w-[200px] font-inter text-[14px] font-normal text-[#000] leading-[130%] text-center md:text-left">© 2025 CoWorkMate. All rights reserved.</p>
          <div className="pb-[54px] md:pb-[0] w-full max-w-[200px] flex items-center justify-between">
            <Link to="/">
              <img src="/images/ic_baseline-facebook.png" alt="error" />
            </Link>
            <Link to="/">
              <img src="/images/mdi_instagram.png" alt="error" />
            </Link>
            <Link to="/">
              <img src="/images/mdi_twitter.png" alt="error" />
            </Link>
            <Link to="/">
              <img src="/images/mdi_youtube.png" alt="error" />
            </Link>
            <Link to="/">
              <img src="/images/basil_linkedin-solid.png" alt="error" />
            </Link>
          </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer