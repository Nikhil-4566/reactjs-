import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <header className="py-[35px] flex items-center justify-between container">
        <div className="w-full max-w-[173px]">
          <Link to="/">
            <img src="/images/logo.png" alt="error" />
          </Link>
        </div>
          <ul className="flex items-center justify-between gap-[30px]">
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
        <div className="hidden lg:flex items-center justify-between gap-[30px] ">
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