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
          <Route path='' element={<Blog/>}/>
        </Routes>
         <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
