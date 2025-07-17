import BlogRemote from "../remoteWork/BlogRemote"
import CategoryRemote from "../remoteWork/CategoryRemote"
import LoopRemote from "../remoteWork/LoopRemote"
import ReadersRemote from "../remoteWork/ReadersRemote"
import RemoteBanner from "../remoteWork/RemoteBanner"
import TopRemote from "../remoteWork/TopRemote"

const RemoteWork = () => {
  return (
    <>
        <RemoteBanner/>
        <TopRemote/>
        <BlogRemote/>
        <CategoryRemote/>
        <LoopRemote/>
        <ReadersRemote/>
    </>
  )
}

export default RemoteWork