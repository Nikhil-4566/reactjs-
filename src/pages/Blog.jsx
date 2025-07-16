import BlogBanner from "../blog/BlogBanner"
import BlogCategory from "../blog/BlogCategory"
import LatestBlog from "../blog/LatestBlog"
import Loop from "../blog/Loop"
import Readers from "../blog/Readers"
import TopRead from "../blog/TopRead"

const Blog = () => {
  return (
    <>
    <BlogBanner/>
    <TopRead/>
    <LatestBlog/>
    <BlogCategory/>
    <Loop/>
    <Readers/>
    </>
  )
}

export default Blog