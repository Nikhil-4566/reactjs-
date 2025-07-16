import BannerWorkspace from "../workspaceSetup/BannerWorkspace"
import BlogWorkspace from "../workspaceSetup/BlogWorkspace"
import CategoryWorkspace from "../workspaceSetup/CategoryWorkspace"
import LoopWorkspace from "../workspaceSetup/LoopWorkspace"
import ReadersWorkspace from "../workspaceSetup/ReadersWorkspace"
import TopWorkspace from "../workspaceSetup/TopWorkspace"

const WorkspaceSetup = () => {
  return (
    <>
    <BannerWorkspace/>
    <TopWorkspace/>
    <BlogWorkspace/>
    <CategoryWorkspace/>
    <LoopWorkspace/>
    <ReadersWorkspace/>
    </>
  )
}

export default WorkspaceSetup