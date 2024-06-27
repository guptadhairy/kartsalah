
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import BuildResume from './pages/BuildResume'
import AnalyzeResume from './pages/AnalyzeResume'
import CheckScore from './pages/CheckScore'
import LinkedIn from './pages/LinkedIn'
import UpdateProfile from './pages/UpdateProfile'
import Settings from './pages/Settings'
import Signout from './pages/Signout'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import OurBlogs from './pages/OurBlogs'
import Blog1 from './pages/Blog1'
import ResumeUpload from './pages/ResumeUpload'
import CreateBlogs from './pages/CreatePage' 
import CoverLetter from './pages/CoverLetter'
import MainContent from './pages/MainContent'
import BuildResume2 from './pages/BuildResume2'


const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/buildresume' element={<BuildResume />} />
      <Route path='/analyzeresume' element={<AnalyzeResume />} />
      <Route path='/checkscore' element={<CheckScore />} />
      <Route path='/linkedin' element={<LinkedIn />} />
      <Route path='/updateprofile' element={<UpdateProfile />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/logout' element={<Signout />} />
      <Route path='/login' element={<Login />} />
      <Route path='/ourblogs' element={<OurBlogs />} />
      <Route path='/blog/:id' element={<Blog1 />} />
      <Route path='/resumeupload' element={<ResumeUpload />} />
      <Route path='/createblogs' element={<CreateBlogs />} />
      <Route path='/coverletter' element={<CoverLetter />} />
      <Route path='/maincontent' element={<MainContent />} />
      <Route path='/buildresumepage2' element={<BuildResume2 />} />
    </Routes>
   </Router>
  )
}

export default App