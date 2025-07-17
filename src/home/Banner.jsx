import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <>
      <p className="text-3xl bg-black w-[340px] text-pink-300 font-roboto" >Banner</p>
      <h1>New</h1>
      <Link to="/about">About</Link>
    </>
  )
}

export default Banner
