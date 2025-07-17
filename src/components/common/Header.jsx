import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <header className="px-[60px] py-[35px] flex items-center justify-between ">
        <div>
          <div className="w-full max-w-[173px]">
            <h1 className="font-Roboto">sdfsdfsfdsfsdfsf</h1>
            <Link to="/">
              <img src="/images/logo.png" alt=""  />
            </Link>
          </div>
        </div>
        <div>
          <nav className="flex items-center justify-between gap-[30px]">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/howitwork">How It Works</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/Contact">Contact</Link>
          </nav>
        </div>
        <div>

        </div>
      </header>
    </>
  )
}

export default Header