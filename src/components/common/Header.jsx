import { useState } from "react";
import { Link } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="py-[35px] flex items-center justify-between container">
        <div className="w-full max-w-[173px]">
          <Link to="/">
            <img src="/images/logo.png" alt="error" />
          </Link>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden block z-11">
          <img src={isMenuOpen ? "/images/mage_multiply.png" : "/images/fe_bar (1).png"} alt="menu toggle" className="w-[24px] h-auto"/>
        </button>
        <ul className={`${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} flex flex-col lg:flex-row gap-6 lg:gap-[30px] p-5 lg:p-0 pt-10 lg:pt-0 lg:items-center lg:justify-center fixed lg:relative top-0 right-0 h-full w-full bg-white z-10 transition-all duration-600 ease-in-out lg:translate-x-0 lg:opacity-100`}>
          <li>
            <Link to="/" className="font-inter text-[18px] font-normal text-black leading-[100%]">Home</Link>
          </li>
          <li>
            <Link to="/about" className="font-inter text-[18px] font-normal text-black leading-[100%]">About</Link>
          </li>
          <li>
            <Link to="/howitwork" className="font-inter text-[18px] font-normal text-black leading-[100%]">How It Works</Link>
          </li>
          <li>
            <Link to="/blog" className="font-inter text-[18px] font-normal text-black leading-[100%]">Blog</Link>
          </li>
          <li>
            <Link to="/Contact" className="font-inter text-[18px] font-normal text-black leading-[100%]">Contact</Link>
          </li>
        </ul>
        <div className="hidden lg:flex items-center justify-between gap-[30px] w-full max-w-[138px]">
          <Link to="/">
            <img src="/images/uil_user.png" alt="error" />
          </Link>
          <Link to="/">
            <img src="/images/mdi_bell-outline.png" alt="error" />
          </Link>
          <Link to="/">
            <img src="/images/material-symbols_search-rounded.png" alt="error" />
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header