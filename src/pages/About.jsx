import AboutBanner from "../about/AboutBanner"
import AboutCoWorkMate from "../about/AboutCoWorkMate"
import AboutFAQ from "../about/AboutFAQ"
import AboutUsers from "../about/AboutUsers"
import Join from "../about/Join"
import MeetTheTeam from "../about/MeetTheTeam"
import MissionVision from "../about/MissionVision"

const About = () => {
  return (
    <>
        <AboutBanner/>
        <MissionVision/>
        <MeetTheTeam/>
        <AboutCoWorkMate/>
        <AboutUsers/>
        <AboutFAQ/>
        <Join/>
    </>
  )
}

export default About