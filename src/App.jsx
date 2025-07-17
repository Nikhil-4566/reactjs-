import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import BrowseWorkspaces from './pages/BrowseWorkspaces'
import WorkSpaceDetail from './pages/WorkSpaceDetail'
import BookingFlow from './pages/BookingFlow'
import UserDashboard from './pages/UserDashboard'
import MyBooking from './pages/MyBooking'
import SavedWorkspace from './pages/SavedWorkspace'
import ProfileSettings from './pages/ProfileSettings'
import ErrorPage from './pages/ErrorPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import BookingConfirmation from './pages/BookingConfirmation'
import ModifyBooking from './pages/ModifyBooking'
import TipsTricks from './pages/TipsTricks'
import WorkspaceSetup from './pages/WorkspaceSetup'
import SuccessStories from './pages/SuccessStories'
import RemoteWork from './pages/RemoteWork'
import ThankingYouPage from './pages/ThankingYouPage'
import Contact from './pages/Contact'
import HowItWork from './pages/HowItWork'
import About from './pages/About'
import OurMissoin from './pages/OurMissoin'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/browseworkspaces' element={<BrowseWorkspaces />} />
          <Route path='/workspacedetail' element={<WorkSpaceDetail />} />
          <Route path='/bookingflow' element={<BookingFlow />} />
          <Route path='/userdashboard' element={<UserDashboard />} />
          <Route path='/mybooking' element={<MyBooking />} />
          <Route path='/svedworkspace' element={<SavedWorkspace />} />
          <Route path='/profilesettings' element={<ProfileSettings />} />
          <Route path='/errorpage' element={<ErrorPage />} />
          <Route path='/bookingconfirmation' element={<BookingConfirmation/>}/>
          <Route path='/modifybooking' element={<ModifyBooking/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/tipstrics' element={<TipsTricks/>}/>
          <Route path='/workspacesetup' element={<WorkspaceSetup/>}/>
          <Route path='/successstories' element={<SuccessStories/>}/>
          <Route path='/thankingyoupage' element={<ThankingYouPage/>}/>
          <Route path='/remoteWork' element={<RemoteWork/>}/>
          <Route path='/thankingyoupage' element={<ThankingYouPage/>}/>
          <Route path='/howitwork' element={<HowItWork/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/ourmissoin' element={<OurMissoin/>}/>
        </Routes>
         <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
