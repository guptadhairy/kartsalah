
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
import BuildResume3 from './pages/BuildResume3' 
import BuildResume4 from './pages/BuildResume4'   
import InterviewQuestions from './pages/InterviewQuestions'
import TechnicalQuestions from './pages/TechnicalQuestions'
import BehaviouralQuestions from './pages/BehaviouralQuestions'
import ResumeVerificationPage from './pages/ResumeVerification'  


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
      <Route path='/interviewquestions' element={<InterviewQuestions />} />
      <Route path='/logout' element={<Signout />} />
      <Route path='/login' element={<Login />} />
      <Route path='/ourblogs' element={<OurBlogs />} />
      <Route path='/blog/:id' element={<Blog1 />} />
      <Route path='/resumeupload' element={<ResumeUpload />} />
      <Route path='/createblogs' element={<CreateBlogs />} />
      <Route path='/coverletter' element={<CoverLetter />} />
      <Route path='/maincontent' element={<MainContent />} />
      <Route path='/buildresumepage2' element={<BuildResume2 />} />
      <Route path='/buildresumepage3' element={<BuildResume3 />} />
      <Route path='/buildresumepage4' element={<BuildResume4 />} /> 
      <Route path='/technicalquestions' element={<TechnicalQuestions />} />
      <Route path='/behaviouralquestions' element={<BehaviouralQuestions />} />
      <Route path='/resumeverification' element={<ResumeVerificationPage />} /> 

    </Routes>
   </Router>
  )
}

export default App